export async function load() {
    const res = await fetch(
        `https://fdnd-agency.directus.app/items/preludefonds_instruments?fields=status,instrument,property,brand`
    );

    const response = await res.json();

    return { instruments: response.data };
}