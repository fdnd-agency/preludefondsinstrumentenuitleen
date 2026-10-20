<script>
  import DamageForm from "$lib/components/organisms/DamageForm.svelte";

  let { data } = $props();
  let instrument = $derived(data.instrument);
</script>

<section>
  <h1>Schade melden bij {instrument.name}</h1>

  <DamageForm />
</section>

<style>
  section {
    display: grid;
    margin: 0 var(--space-xs);
    gap: var(--space-2xs) 0;
    h1 {
      margin: 0 var(--space-xs);
      text-align: center;
      @media (min-width: 660px) {
        max-width: clamp(550px, 95%, 1200px);
        margin-inline: auto;
      }
    }
  }
</style>
