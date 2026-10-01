<script>
    import Details from "$lib/components/InstrumentDetail.svelte";
    import ActivityList from "$lib/components/ActivityList.svelte";

    let { data } = $props();
    let instrument = $derived(data.instrument);
    let log = $derived(data.instrument.log)
</script>

<main>
    <Details {instrument} />

    <ActivityList {log}/>
</main>
