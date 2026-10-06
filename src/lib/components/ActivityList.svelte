<script>
    import Innemen from "$lib/assets/icons/innemen.svg";
    import Uitlenen from "$lib/assets/icons/uitlenen.svg";
    import Schade from "$lib/assets/icons/schade.svg";
    import Onbekend from "$lib/assets/icons/onbekend.svg";

    const icons = {
        innemen: Innemen,
        uitlenen: Uitlenen,
        schade: Schade,
        onbekend: Onbekend,
    };

    let { log } = $props();
</script>

<section>
    <h2>Activiteiten</h2>
    {#each log as event}
        <details>
            <summary>
                <h3>
                    <img
                        src={icons[event.type_action?.toLowerCase()] ??
                            Onbekend}
                        alt=""
                        width="30"
                    />
                    {event.type_action ?? "onbekend"}
                </h3>
                <p>
                    {new Date(event.date_created).toLocaleTimeString("nl-NL", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                    {new Date(event.date_created).toLocaleDateString("nl-NL", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
            </summary>
            <dl>
                <div>
                    <dt>Docent:</dt>
                    <dd>{event.performed_by ?? "Prelude"}</dd>
                </div>
                <div>
                    <dt>Student:</dt>
                    <dd>{event.involved_party ?? "Onbekend"}</dd>
                </div>
                <dt>details:</dt>
                <dd>{event.note ?? "Geen details"}</dd>
            </dl>
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
            border-bottom: solid var(--space-3xs) var(--primary-neutral);
            margin: var(--space-2xs) 0;
            padding: var(--space-2xs) var(--space-xs);

            summary {
                user-select: none;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                font-family: monospace;
                align-items: center;

                h3 {
                    display: flex;
                    gap: var(--space-3xs);
                    img {
                        width: 25px;
                        height: 25px;
                        margin: auto;
                    }
                }

                p::after {
                    content: "↑";
                    display: inline-block;
                    margin: 0 var(--space-3xs);
                    transition: ease-out 0.25s;
                }
            }

            dl {
                div {
                    display: flex;
                    gap: var(--space-2xs);
                }
                dt {
                    font-weight: bold;
                }
            }

            &:open {
                summary {
                    border-bottom: solid var(--space-3xs) var(--primary-neutral);
                    p::after {
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }
</style>
