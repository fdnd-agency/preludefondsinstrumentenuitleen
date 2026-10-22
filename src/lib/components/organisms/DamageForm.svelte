<script>
    import TextInput from "$lib/components/molecules/InputText.svelte";
    import TextArea from "$lib/components/molecules/InputTextArea.svelte";
    let { instrument } = $props();
</script>

<form method="post" action="?/reportDamage">
    <input type="hidden" name="id" value={instrument.id} />
    <TextInput
        name="performed_by"
        label="Docent"
        placeholder="Naam docent"
        required
    />
    <TextInput
        name="involved_party"
        label="Student"
        placeholder="Naam student"
        required
    />
    <TextArea
        name="note"
        label="Omschrijf de schade"
        placeholder="Korte omschrijving van de schade"
        required
    />
    <!-- Image upload tba -->
    <button type="submit" class="primary button">Schade melden</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: clamp(350px, 100%, 600px);
        justify-self: center;
        background-color: var(--primary-lightest);
        padding: var(--space-md);
        gap: var(--space-xs);
        border: solid var(--space-3xs) var(--primary-neutral);
        border-radius: var(--space-md);

        button {
            margin: 0 auto;
        }
    }
</style>
