<script>
    import Details from "$lib/components/organisms/InstrumentDetail.svelte";
    import ActivityList from "$lib/components/organisms/ActivityList.svelte";
    import PreviewCarrousel from "$lib/components/molecules/PreviewCarrousel.svelte";

    let { data } = $props();
    let instrument = $derived(data.instrument);
    let log = $derived(data.instrument.log);
    let related = $derived(data.related);
</script>

<main>
    <Details {instrument} />
    <PreviewCarrousel {related}/>

    <ActivityList {log} />
</main>
