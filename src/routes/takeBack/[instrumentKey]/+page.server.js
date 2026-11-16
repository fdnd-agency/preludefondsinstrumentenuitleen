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
    takeBack: async ({ request, params }) => {
        const formData = await request.formData();
        const id = formData.get('id')

        const response = await fetch(
            `https://fdnd-agency.directus.app/items/preludefonds_instruments/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: "Beschikbaar",
                    student_name: null,
                    rented_from: null
                })
            }
        )

        if (!response.ok) {
            return {
                success: false,
                message: "Er is een fout opgetreden"
            }
        }
        redirect(303, `/details/${params.instrumentKey}?success=take-back`);
    }
}