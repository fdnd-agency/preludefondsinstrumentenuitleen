<script>
    import Picture from "$lib/components/Picture.svelte";
    let { instrument } = $props();
</script>

<h1>{instrument.name}</h1>

<section>
    <h2 class={instrument.status.toLowerCase().replace(" ", "-")}>
        {instrument.status}
    </h2>

    {#if instrument.status === "Uitgeleend"}
        <dl>
            <div>
                <dt>Uitgeleend tot:</dt>
                <dd>
                    {instrument.rented_until ?? "Niet bekend"}
                </dd>
            </div>
            <div>
                <dt>Uitgeleend door:</dt>
                <dd>
                    {instrument.student_name ?? "Niet bekend"}
                </dd>
            </div>
        </dl>
    {/if}
    <dl>
        <div>
            <dt>Bergplaats:</dt>
            <dd>
                {instrument.storage_room ?? "Niet bekend"}
            </dd>
        </div>
        <div>
            <dt>Eigendom:</dt>
            <dd>
                {instrument.property ?? "Niet bekend"}
            </dd>
        </div>
    </dl>

    <div class="action-buttons">
        <a href="#">Terug nemen</a>
        <a href="#">Schade melden</a>
    </div>

    <h3>Details</h3>

    <dl>
        <div>
            <dt>Type instrument:</dt>
            <dd>
                {instrument.instrument ?? "Niet bekend"}
            </dd>
        </div>
        <div>
            <dt>Serie nummer:</dt>
            <dd>
                {instrument.serial_number ?? "Niet bekend"}
            </dd>
        </div>
        <div>
            <dt>Merk:</dt>
            <dd>
                {instrument.brand ?? "Niet bekend"}
            </dd>
        </div>
    </dl>

    <a href="#" class="change-button">Aanpassen</a>

    <Picture
        src={instrument.photo}
        width="450"
        height="450"
        alt={instrument.name}
    />
</section>

<style>
    h1 {
        margin: 0 var(--space-xs);
        @media (min-width: 660px) {
            max-width: clamp(550px, 95%, 1200px);
            margin-inline: auto;
        }
    }

    .uitgeleend {
        color: var(--color-caution);
    }
    .in-repartie {
        color: var(--color-caution);
    }

    .beschikbaar {
        color: var(--color-positive);
    }

    section {
        display: grid;
        margin: 0 var(--space-xs);
        gap: var(--space-2xs) 0;
        @media (min-width: 660px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 0.25fr 0.3fr 0.3fr 0.5fr 0.25fr 0.5fr 0.25fr;
            gap: 0 var(--space-xs);
            max-width: clamp(550px, 95%, 1200px);
            height: 550px;
            justify-content: center;
            margin-inline: auto;
        }

        h2 {
            grid-row: 2;
            @media (min-width: 660px) {
                grid-row: 1;
                grid-column: 2;
            }
        }

        dl {
            div {
                display: flex;
                gap: 0 var(--space-2xs);
                align-items: center;
            }
            dt {
                font-weight: bold;
            }
            dd {
            }
        }

        dl:first-of-type {
            @media (min-width: 660px) {
                grid-column: 2;
                grid-row: 2;
            }
        }

        dl:nth-of-type(2) {
            @media (min-width: 660px) {
                grid-column: 2;
                grid-row: 3;
            }
        }

        .action-buttons {
            @media (min-width: 660px) {
                grid-column: 2;
                grid-row: 4;
                display: flex;
                flex-direction: column;
                gap: var(--space-xs) 0;
            }
            a {
                background-color: var(--color-primary);
                width: 250px;
            }
        }

        h3 {
            @media (min-width: 660px) {
                grid-column: 2;
                grid-row: 5;
                align-self: end;
            }
        }
        dl:last-of-type {
            @media (min-width: 660px) {
                grid-column: 2;
                grid-row: 6;
            }
        }
        .change-button {
            background-color: var(--color-primary);
            width: 250px;
            @media (min-width: 660px) {
                grid-column: 2;
                grid-row: 7;
            }
        }
        :global(picture) {
            grid-row: 1;
            height: 350px;
            @media (min-width: 660px) {
                grid-column: 1 / auto;
                grid-row: 1/-1;
                height: 100%;
            }
        }
    }
</style>
