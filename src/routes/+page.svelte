<script>
    import InstrumentList from "$lib/components/organisms/InstrumentList.svelte";

    let { data } = $props();
    const instruments = $derived(data.instruments);
</script>

<main>
    <InstrumentList {data} />
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

