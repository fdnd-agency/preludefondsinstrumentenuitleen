<script>
  import Details from "$lib/components/organisms/InstrumentDetail.svelte";

  let { data } = $props();
  let instrument = $derived(data.instrument);
</script>

<main>
  <Details {instrument} />
</main>
