export async function load({ fetch, params, url }) {
    const res = await fetch(
        `https://fdnd-agency.directus.app/items/preludefonds_instruments?filter[key][_eq]=${params.instrumentKey}&fields=*.*&deep[log][_sort]=-date_created`
    );
    const data = await res.json();

    const res2 = await fetch(
        `https://fdnd-agency.directus.app/items/preludefonds_instruments?filter%5Binstrument%5D%5B_eq%5D=${data.data[0].instrument}&fields=status,key,name,photo,instrument`
    )

    const relatedInstruments = await res2.json();

    return {
        instrument: data.data[0],
        related: relatedInstruments.data,
        success: url.searchParams.get('success')

    }
}
