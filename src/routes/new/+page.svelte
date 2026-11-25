<script>
    import TextInput from "$lib/components/molecules/InputText.svelte";
    let { data } = $props();
</script>

<main>
  <h1>Instrument Toevoegen</h1>

  <form method="POST" class="instrument-form">
    <div class="form-velden">
    <TextInput
        name="name"
        label="Naam instrument"
        placeholder="Naam instrument"
        required
    />

    <TextInput
        name="serial_number"
        label="Serienummer"
        placeholder="Serienummer"
        required
    />

      <label>
        <span>Type</span>
        <select name="type" required>
          {#each data.types as type}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </label>

    <TextInput
        name="brand"
        label="Merk"
        placeholder="Merk"
        required
    />

    <TextInput
        name="property"
        label="Eigendom van"
        placeholder="Eigendom van"
        required
    />
    </div>

    <button type="submit" class="primary button">
      Instrument toevoegen
    </button>
  </form>
</main>

<style>
    main {
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
    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
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