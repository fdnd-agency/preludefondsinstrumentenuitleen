export async function load({ fetch, params, url }) {
    const res = await fetch(
        `https://fdnd-agency.directus.app/items/preludefonds_instruments?filter[key][_eq]=${params.instrumentKey}&fields=*.*&deep[log][_sort]=-date_created`
    );
    const data = await res.json();

    return {
        instrument: data.data[0],
        success: url.searchParams.get('success')

    }
}
