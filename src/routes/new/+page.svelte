<script>
  let { data } = $props();
</script>

<main class="toevoegen">
  <h1>Instrument Toevoegen</h1>

  <form method="POST" class="instrument-form">
    <div class="form-velden">
      <label>
        <span>Naam instrument</span>
        <input name="name" required />
      </label>

      <label>
        <span>Serienummer</span>
        <input name="serial_number" required />
      </label>

      <label>
        <span>Type</span>
        <select name="type" required>
          {#each data.types as type}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </label>

      <label>
        <span>Merk</span>
        <input name="brand" required />
      </label>

      <label>
        <span>Eigendom van</span>
        <input name="property" required />
      </label>
    </div>

    <button type="submit" class="knop-toevoegen">
      Instrument toevoegen
    </button>
  </form>
</main>