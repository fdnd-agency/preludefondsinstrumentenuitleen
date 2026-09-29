<script>
    import Picture from "$lib/components/Picture.svelte";
    let { instrument } = $props();
</script>

<h1>{instrument.name}</h1>

<section>
    <h2>{instrument.status}</h2>
    <dl>
        {#if instrument.status === "Uitgeleend"}
            <dt>Uitgeleend tot:</dt>
            <dd>
                {instrument.rented_until ?? "Niet bekend"}
            </dd>

            <dt>Uitgeleend door:</dt>
            <dd>
                {instrument.student_name ?? "Niet bekend"}
            </dd>
        {/if}

        <dt>Bergplaats:</dt>
        <dd>
            {instrument.storage_room ?? "Niet bekend"}
        </dd>

        <dt>Eigendom:</dt>
        <dd>
            {instrument.property ?? "Niet bekend"}
        </dd>
    </dl>

    <div class="action-buttons">
        <a href="#">Terug nemen</a>
        <a href="#">Schade melden</a>
    </div>

    <h3>Details</h3>

    <dl>
        <dt>Type instrument:</dt>
        <dd>
            {instrument.instrument ?? "Niet bekend"}
        </dd>

        <dt>Serie nummer:</dt>
        <dd>
            {instrument.serial_number ?? "Niet bekend"}
        </dd>

        <dt>Merk:</dt>
        <dd>
            {instrument.brand ?? "Niet bekend"}
        </dd>
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
        margin: 0 auto;
        @media (min-width: 660px) {
            max-width: 1200px;
        }
    }
    section {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;

        @media (min-width: 660px) {
            grid-template-columns: 1fr 1fr;
        }

        h2 {
            grid-row: 2;
        }

        dl:first-of-type {
            @media (min-width: 660px) {
                grid-column: 2;
            }
        }

        .action-buttons {
            @media (min-width: 660px) {
                grid-column: 2;
            }
        }

        h3 {
            @media (min-width: 660px) {
                grid-column: 2;
            }
        }
        dl:last-of-type {
            @media (min-width: 660px) {
                grid-column: 2;
            }
        }
        .change-button {
            @media (min-width: 660px) {
                grid-column: 2;
            }
        }
        :global(picture) {
            grid-row: 1;
            height: 350px;
            @media (min-width: 660px) {
                grid-column: 1;
                grid-row: 3/-1;
                height: 100%;
            }
        }
    }
</style>
