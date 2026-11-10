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
    <label class="sr-only" for="instrument">Instrumenten</label>
    <select id="instrument" name="instrument" class="button secondary">
      <option>Alle instrumenten</option>

      {#each instrumentGroups as group}
        <optgroup label={group.name}>
          {#each group.instruments as instrument}
            <option value={instrument}>{instrument}</option>
          {/each}
        </optgroup>
      {/each}
    </select>

    <label class="sr-only" for="status-filter">Status</label>
    <select
      id="status-filter"
      bind:value={selectedStatus}
      class="button secondary"
    >
      <option value="">Status</option>

      {#each statuses as status}
        <option value={status}>{status}</option>
      {/each}
    </select>
  </div>

  <!-- Tablet and desktop screen -->
  <div class="filter-desktop">
    <details>
      <summary class="button secondary">Filters</summary>
      <div class="info-filter">
        {#each instrumentGroups as group}
          <section>
            <h3>{group.name}</h3>
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
            {#each statuses as status (status)}
              {@const isActive = selectedStatus === status}
              <li>
                <button
                  type="button"
                  class="status-button"
                  class:active={isActive}
                  aria-pressed={isActive}
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
    gap: var(--space-xs);
  }

  .filter-desktop {
    display: none;
  }

  /* Tablet and Desktop */
  @media (min-width: 489px) {
    .filters-mobile {
      display: none;
    }
    .filter-desktop {
      display: block;
    }
  }
  .sr-only {
    position: absolute;
    width: var(--space-3xs);
    height: var(--space-3xs);
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  select {
    width: fit-content;
    margin-bottom: var(--space-xs);
  }

  /* Tablet and desktop screen */
  summary {
    width: 100px;
  }

  details {
    margin: 0 0 var(--space-md) 0;
  }
  .info-filter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: fit-content;
    position: absolute;
    z-index: 100;
    margin-left: var(--space-lg);
    padding: var(--space-sm);
    border-radius: var(--space-xs);
    background-color: var(--primary-lightest);
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

  .status-button {
    font-family: var(--font-primary);
    font-size: var(--font-size-body-sm);
    background: none;
    border: none;
    transition: 0.5s;
    padding: 3px;
    border-radius: 2px;

    &:hover {
      background-color: var(--primary-dark);
      color: var(--neutral-white);
      cursor: pointer;
    }

    &:focus {
      background-color: var(--primary-dark);
      color: var(--neutral-white);
      padding: 3px;
      outline: var(--space-3xs) solid var(--primary-neutral);
      padding: 3px;
    }
  }
</style>
