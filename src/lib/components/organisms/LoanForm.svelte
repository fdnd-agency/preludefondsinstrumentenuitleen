<script>
    import TextInput from "$lib/components/molecules/InputText.svelte";
    import TextArea from "$lib/components/molecules/InputTextArea.svelte";
    let { instrument, action } = $props();
</script>

<form method="post" action="?/{action}">
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
        value={instrument.student_name}
        readonly={!!instrument.student_name}
        required
    />

    <TextArea name="note" label="Notitie" placeholder="Notitie over het lenen" />

    {#if instrument.status === "Uitgeleend"}
        <button type="submit" class="primary button">Innemen</button>
    {:else if instrument.status === "Beschikbaar"}
        <button type="submit" class="primary button">Uitlenen</button>
    {/if}
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
