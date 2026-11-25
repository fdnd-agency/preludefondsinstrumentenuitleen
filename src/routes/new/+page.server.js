const baseUrl = 'https://fdnd-agency.directus.app/items/preludefonds_instruments/'

const types = [
  'Snaarinstrument',
  'Blaasinstrument',
  'Toetsinstrument',
  'Slagwerk',
  'Overig'
];

export function load() {
  return { types };
}

export const actions = {
  default: async ({ request, fetch }) => {
    const form = Object.fromEntries(await request.formData());
    const get = (field) => String(form[field] ?? '').trim();

    const name = get('name');
    const serial_number = get('serial_number');
    const type = get('type');
    const brand = get('brand');
    const property = get('property');

    if (
      [name, serial_number, brand, property].some((value) => !value) ||
      !types.includes(type)
    ) {
      error(400, 'Vul alle velden correct in.');
    }

    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const keysResponse = await fetch(`${baseUrl}?fields=key&limit=-1`);

    if (!keysResponse.ok) error(502, 'Instrumenten konden niet worden opgehaald.');

    const { data: items = [] } = await keysResponse.json();
    const keys = new Set(items.map((item) => item.key));

    let number = 1;
    let key;
    do {
      key = `${slug || 'instrument'}-${String(number++).padStart(2, '0')}`;
    } while (keys.has(key));

    const instrumentResponse = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        serial_number,
        type,
        brand,
        property,
        status: 'Beschikbaar',
        key
      })
    });

    if (!instrumentResponse.ok) error(502, 'Instrument kon niet worden opgeslagen.');;
  }
};