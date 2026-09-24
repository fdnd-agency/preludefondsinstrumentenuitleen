<script>
 let {data} = $props();
 let instrument = $derived(data.instrument)

</script>

<main>
    <h1>welkom op details</h1>
    <p>{ instrument.name}</p>
</main>
