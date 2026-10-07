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

