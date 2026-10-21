<script>
  let { selectedStatus = $bindable("") } = $props();

  const statuses = ["Beschikbaar", "Uitgeleend", "In Reperatie"];

  const instrumentGroups = [
    {
      name: "Snaar",
      instruments: [
        "Gitaar",
        "Gitaar 3/4",
        "Basgitaar",
        "Elektrische gitaar",
        "Cello",
        "Viool",
        "Ukelele",
        "Harp",
      ],
    },

    {
      name: "Blaas",
      instruments: [
        "Blokfluit",
        "Dwarsfluit",
        "Hoorn",
        "Altsaxofoon",
        "Tenorsaxofoon",
        "Baritonsaxofoon",
        "Trompet",
        "Trombone",
        "Hobo",
        "Bugel",
        "Klarinet",
      ],
    },

    {
      name: "Toets",
      instruments: ["Keyboard"],
    },

    {
      name: "Slag",
      instrumentss: ["Darbukha", "Cajon"],
    },

    {
      name: "Overig",
      instrumentss: ["Accordeon"],
    },
  ];

  function toggleStatus(status) {
    selectedStatus = selectedStatus === status ? "" : status;
  }
</script>

<nav aria-label="Instrumentfilters">
  <!-- Mobile screen -->
  <div class="filters-mobile">
    <select id="instrument" name="instrument">
      <option>Alle instrumenten</option>

      {#each instrumentGroups as group}
        <optgroup label={group.name}>
          {#each group.instruments as instrument}
            <option value={instrument}>{instrument}</option>
          {/each}
        </optgroup>
      {/each}
    </select>

    <select id="status-filter" bind:value={selectedStatus}>
      <option value="">Status</option>

      {#each statuses as status}
        <option value={status}>{status}</option>
      {/each}
    </select>
  </div>

  <!-- Tablet and desktop screen -->
  <div class="filter-desktop">
    <details>
      <summary>Filters</summary>
      <div class="info-filter">
        {#each instrumentGroups as group}
          <section>
            <h3>group.name</h3>
            <ul>
              {#each group.instruments as instrument}
                <li>{instrument}</li>
              {/each}
            </ul>
          </section>
        {/each}

        <section>
          <h3>Status</h3>
          <ul>
            {#each statuses as status}
              <li>
                <button
                  type="button"
                  class:active={selectedStatus === status}
                  aria-pressed={selectedStatus === status}
                  onclick={() => toggleStatus(status)}
                >
                  {status}
                </button>
              </li>
            {/each}
          </ul>
        </section>
      </div>
    </details>
  </div>
</nav>

<style>
  /* Filter mobile screen */
  .filters-mobile {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .filter-desktop {
    display: none;
  }

  /* Tablet and Desktop screen 768px */
  @media (min-width: 768px) {
    .filters-mobile {
      display: none;
    }
    .filter-desktop {
      display: block;
    }
  }

  select {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
    text-align: center;
    background: none;
    background-color: color-mix(
      in hsl,
      var(--primary-lightest) 40%,
      transparent
    );
    color: var(--primary-dark);
    border: var(--space-3xs) solid var(--primary-light);
    border-radius: var(--space-xs);
    padding: var(--space-xs);
    margin: var(--space-md);
  }

  /* Tabelet and desktop screen */
  summary {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
    text-align: center;
    background: none;
    background-color: color-mix(
      in hsl,
      var(--primary-lightest) 40%,
      transparent
    );
    color: var(--primary-dark);
    border: var(--space-3xs) solid var(--primary-light);
    border-radius: var(--space-xs);
    padding: var(--space-xs);
    width: 95px;
    margin-left: var(--space-xl);
    margin-bottom: var(--space-xl);
  }
  details {
    margin: var(--space-md);
  }
  .info-filter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: var(--space-md);
    padding: var(--space-sm);
    border-radius: var(--space-xs);
    background-color: color-mix(
      in hsl,
      var(--primary-lightest) 40%,
      transparent
    );
  }
  h3 {
    margin-bottom: var(--space-2xs);
  }
  section {
    margin-right: var(--space-md);
    font-family: var(--font-primary);
  }

  ul {
    font-family: var(--font-primary);
    font-size: var(--font-size-body-sm);
  }

  button {
    font-family: var(--font-primary);
    font-size: var(--font-size-body-sm);
    background: none;
    border: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: var(--space-3xs) solid var(--primary-neutral);
    }
  }
</style>
