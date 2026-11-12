<script>
  import Filters from "$lib/components/organisms/FilterInstruments.svelte";
  import InstrumentTable from "$lib/components/organisms/InstrumentTable.svelte";

  let { data } = $props();

  let selectedStatus = $state("");

  const filteredInstruments = $derived(
    data.instruments.filter(
      ({ status }) => selectedStatus === "" || status === selectedStatus,
    ),
  );
</script>

<header>
  <Filters bind:selectedStatus />
</header>

<main>
  <InstrumentTable instruments={filteredInstruments} />
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
