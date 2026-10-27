<script>
    import Details from "$lib/components/organisms/InstrumentDetail.svelte";
    import ActivityList from "$lib/components/organisms/ActivityList.svelte";

    let { data } = $props();
    let instrument = $derived(data.instrument);
    let log = $derived(data.instrument.log);
    let related = $derived(data.related);
</script>

<main>
    <Details {instrument} />
    <ActivityList {log} />
    { related[0].name}
</main>
