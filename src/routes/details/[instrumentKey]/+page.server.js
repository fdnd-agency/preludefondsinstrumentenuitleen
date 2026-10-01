export async function load({fetch, params}) {
    const res = await fetch(
        `https://fdnd-agency.directus.app/items/preludefonds_instruments?filter[key][_eq]=${params.instrumentKey}&fields=*.*`
    );
    const data = await res.json();

    console.log(data.data[0])

    return { instrument: data.data[0]}
}
