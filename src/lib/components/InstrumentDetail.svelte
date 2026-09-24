<script>
    import Picture from "$lib/components/Picture.svelte";
    let { instrument } = $props();
</script>

<h1>{instrument.name}</h1>
<section>
    <h2>{instrument.status}</h2>
    {#if instrument.status === "Uitgeleend"}
        <p><strong>Uitgeleend tot:</strong> {instrument.rented_until ?? 'Niet bekend'}</p>
        <p><strong>Uitgeleend door:</strong> {instrument.student_name ?? 'Niet bekend'}</p>
    {/if}

    <p><strong>Bergplaats:</strong>{instrument.storage_room ?? 'Niet bekend'}</p>
    <p><strong>Eigendom:</strong>{instrument.propery ?? 'Niet bekend'}</p>

    <h3>Details</h3>
    <p><strong>Type instrument:</strong>{instrument.instrument ?? 'Niet bekend'}</p>
    <p><strong>Serie nummer:</strong>{instrument.serial_number ?? 'Niet bekend'}</p>
    <p><strong>Merk:</strong>{instrument.brand ?? 'Niet bekend'}</p>

    <Picture
        src={instrument.photo}
        width="250"
        height="250"
        alt={instrument.name}
    />
</section>

<style>
</style>
