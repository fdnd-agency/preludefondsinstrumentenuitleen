
export async function logActivity(id, performedBy, involvedParty, note, typeAction) {

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
                type_action: typeAction
            })
        }
    )
    if (!response.ok) {
        return {
            success: false,
            message: "Er is een fout opgetreden"
        }
    }
}

// Gebruik de functie zo

// await logActivity(id, performedBy, involvedParty, note, "innemen");
// De soorten type_action zijn:
// innemen
// uitlenen
// schade
