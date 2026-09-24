<script>
    import Details from "$lib/components/InstrumentDetail.svelte";

    let { data } = $props();
    let instrument = $derived(data.instrument);
</script>

<main>
    <Details {instrument} />
</main>
