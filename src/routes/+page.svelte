<script>
    import checkIcon from '/src/lib/assets/check-circle.svg';
    import notDisturnIcon from '/src/lib/assets/do_not_disturb_on.svg';
    import alertIcon from '/src/lib/assets/alert-triangle.svg';

    let { data } = $props();
    const instruments = $derived(data.instruments);
</script>
<main>
    <section class="table-instrument">
        <table>
            <thead>
                <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Instrument</th>
                    <th scope="col">Merk</th>
                    <th scope="col">Eigendom van</th>
                </tr>
            </thead>

            <tbody>
            {#each instruments as item} 
            <tr>
                <td>
                        {#if item.status === 'Beschikbaar'}
                            <div class="status available">
                            <img src="{checkIcon}" alt="">
                                {item.status}
                            </div>
                        {:else if item.status === 'Uitgeleend'}
                            <div class="status on-loan">
                            <img src="{notDisturnIcon}" alt="">
                                {item.status}
                            </div>
                        {:else if item.status === 'In Reperatie'}
                            <div class="status repair">
                            <img src="{alertIcon}" alt="">
                                {item.status}
                            </div>
                        {:else}
                            <div class="status unknown">
                                <em>Niet beschikbaar</em>
                            </div>
                        {/if}
                </td>
                <td>{item.instrument}</td>
                <td>
                    {#if item.brand === null}
                        <em>Niet beschikbaar</em> 
                    {:else}
                        {item.brand}
                    {/if}
                </td>

                <td>
                    {#if item.property === null}
                        <em>Niet beschikbaar</em> 
                    {:else}
                        {item.property}
                    {/if}
                </td>
            </tr>
            {/each}
            </tbody>
        </table>
    </section>
</main>

<style>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    table {
    width: 100%;
    border-collapse: collapse;
    }

    thead {
    background-color: var(--primary-lighter);
    }

    th {
        padding: 1rem;
        font-family: var(--font-primary);
        text-align: center;
    }
    .status{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        text-align: center;
        border-radius: 5px;
    }
    .available{
        border: 1px solid var(--positive-neutral);
        background-color: var(--positive-lightest);
    }
    .on-loan{
        border: 1px solid var(--caution-neutral);
        background-color: var(--caution-lightest);
    }
    .repair{
        border: 1px solid var(--tertiary-neutral);
        background-color: var(--tertiary-lightest);
    }
    .unknown{
        border: 1px solid var(--neutral-mid-grey);
        background-color: var(--neutral-faint-grey);
    }
    td{
        font-family: var(--font-primary);
        font-size: var(--font-size-body-sm);
        padding: 20px;
        border: 2px solid var(--primary-lighter);
        background-color: color-mix(in hsl, var(--primary-lightest) 40%, transparent);
    }
</style>