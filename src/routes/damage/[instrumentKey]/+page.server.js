import { redirect } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const res = await fetch(
        `https://fdnd-agency.directus.app/items/preludefonds_instruments?filter[key][_eq]=${params.instrumentKey}`
    );
    const data = await res.json();

    return {
        instrument: data.data[0],
    }
}

export const actions = {
    reportDamage: async ({ request, params }) => {
        const formData = await request.formData();

        const id = formData.get('id')
        const performedBy = formData.get('performed_by');
        const involvedParty = formData.get('involved_party');
        const note = formData.get('note');

        const response = await fetch(
            `https://fdnd-agency.directus.app/items/preludefonds_log`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    instrument: id,
                    performed_by: performedBy,
                    involved_party: involvedParty,
                    note: note,
                    type_action: "schade"
                })
            }
        )
        if (!response.ok) {
            return {
                success: false,
                message: "Er is een fout opgetreden"
            }
        }
        redirect(303, `/details/${params.instrumentKey}?success=damage-reported`);
    }
}