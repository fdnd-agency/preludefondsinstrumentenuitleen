<script>
    let { log } = $props();
</script>

<section>
    <h2>Activity log</h2>
    {#each log as event}
        <details>
            <summary>{event.type_action ?? "onbekende actie"}</summary>
            <p>Docent: {event.performed_by ?? "Prelude"}</p>
            <p>Student: {event.involved_party ?? "Onbekend"}</p>
            <p>details: {event.note ?? "Geen details"}</p>
            <p>
                Datum: {new Date(event.date_created).toLocaleTimeString(
                    "nl-NL",
                    {
                        hour: "2-digit",
                        minute: "2-digit",
                    },
                )}
                {new Date(event.date_created).toLocaleDateString("nl-NL", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
            </p>
        </details>
    {/each}
</section>

<style>
    section {
        margin: 0 var(--space-xs);
        display: flex;
        flex-direction: column;

        @media (min-width: 660px) {
            max-width: clamp(550px, 95%, 1200px);
            margin-inline: auto;
        }

        details {
            background-color: var(--primary-lightest);
            border-radius: var(--space-xs);
            margin: var(--space-2xs) 0;
            border-bottom: solid var(--space-3xs) var(--primary-neutral);

            summary {
                user-select: none;
                cursor: pointer;
            }

            &:open {
                summary {
                    border-bottom: solid var(--space-3xs) var(--primary-neutral);
                }
            }
        }
    }
</style>
