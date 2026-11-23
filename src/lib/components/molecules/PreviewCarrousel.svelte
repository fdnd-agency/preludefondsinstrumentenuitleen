<script>
    import Preview from "$lib/components/molecules/InstrumentPreview.svelte";
    let { related } = $props();
</script>

<section>
    <h2>Gerelateerde instrumenten</h2>
    <div>
        {#each related as item}
            <Preview {item} />
        {/each}
    </div>
</section>

<style>
    section {
        max-width: clamp(550px, 95%, 1200px);
        margin-inline: auto;
        div {
            display: flex;
            overflow-x: scroll;
        }
    }
</style>
