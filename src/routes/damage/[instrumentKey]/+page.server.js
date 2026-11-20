import { redirect } from '@sveltejs/kit';
import { logActivity } from '$lib/server/activity';

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

        await logActivity(id, performedBy, involvedParty, note, "schade")
        redirect(303, `/details/${params.instrumentKey}?success=damage-reported`);
    }
}