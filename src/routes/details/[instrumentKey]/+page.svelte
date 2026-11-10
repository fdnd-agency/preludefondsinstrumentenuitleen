<script>
    import Details from "$lib/components/organisms/InstrumentDetail.svelte";
    import ActivityList from "$lib/components/organisms/ActivityList.svelte";
    import InstrumentPreview from "$lib/components/molecules/InstrumentPreview.svelte"

    let { data } = $props();
    let instrument = $derived(data.instrument);
    let log = $derived(data.instrument.log);
    let related = $derived(data.related[1]);
</script>

<main>
    <Details {instrument} />
    <InstrumentPreview {related}/>
   
    <ActivityList {log} />
</main>
