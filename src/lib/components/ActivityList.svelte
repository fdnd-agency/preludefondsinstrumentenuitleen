<script>
    let { log } = $props();
</script>

<section>
    <h2>Activity log</h2>
    {#each log as event }
    <details>
        <summary>{event.type_action}</summary>
        <p>{event.id}</p>
        <p>Docent: {event.performed_by ?? 'Prelude'}</p>
        <p>Student: {event.involved_party ?? 'Onbekend'}</p>
        <p>details: {event.note ?? 'Geen details'}</p>
    </details>
    {/each}
</section>

<style>
    section {
        margin: 0 var(--space-xs);
  
        @media (min-width: 660px) {
            max-width: clamp(550px, 95%, 1200px);
            margin-inline: auto;
        }
    }
</style>
