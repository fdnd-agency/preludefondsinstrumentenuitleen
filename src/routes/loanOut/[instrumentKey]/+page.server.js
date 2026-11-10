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
    loanOut: async ({ request, params }) => {
        const currentDate = new Date().toISOString();
        const formData = await request.formData();
        const id = formData.get('id')
        const involvedParty = formData.get('involved_party');

        const response = await fetch(
            `https://fdnd-agency.directus.app/items/preludefonds_instruments/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: "Uitgeleend",
                    student_name: involvedParty,
                    rented_from: currentDate
                })
            }
        )

        if (!response.ok) {
            return {
                success: false,
                message: "Er is een fout opgetreden"
            }
        }
        redirect(303, `/details/${params.instrumentKey}?success=loaned-out`);
    }
}