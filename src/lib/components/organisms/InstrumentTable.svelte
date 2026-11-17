<script>
  import checkIcon from "$lib/assets/check-circle.svg";
  import notDisturnIcon from "$lib/assets/do_not_disturb_on.svg";
  import alertIcon from "$lib/assets/alert-triangle.svg";

  import StatusBadge from "$lib/components/atoms/StatusBadge.svelte";
  let { instruments } = $props();
</script>

<div class="table-instrument">
  <table>
    <thead>
      <tr>
        <th scope="col">Status</th>
        <th scope="col">Instrument</th>
        <th scope="col">Merk</th>
        <th scope="col">Eigendom van</th>
        <th scope="col">Details</th>
      </tr>
    </thead>

    <tbody>
      {#each instruments as { key, status, instrument, brand, property } (key)}
        <tr>
          <td><StatusBadge {status} /></td>
          <td><a href="/details/{key}">{instrument ?? "onbekend"}</a></td>
          <td>{brand ?? "onbekend"}</td>
          <td>{property ?? "onbekend"}</td>
          <td><a href="/details/{key}">Bekijk</a></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .table-instrument {
    container-type: inline-size;
    width: 100%;
  }

  table {
    margin-inline: auto;
    border-collapse: collapse;

    thead {
      background-color: var(--primary-lighter);
    }

    th {
      padding: var(--space-md);
      border: var(--space-3xs) solid var(--primary-lighter);
      text-align: left;
    }

    td {
      padding: var(--space-sm);
      border: var(--space-3xs) solid var(--primary-lighter);
      background-color: color-mix(
        in hsl,
        var(--primary-lightest) 40%,
        transparent
      );
      font-size: var(--font-size-body-sm);
    }

    th:nth-of-type(n + 3),
    td:nth-of-type(n + 3) {
      display: none;

      @container (min-width: 690px) {
        display: table-cell;
      }
    }
  }

  a {
    color: var(--neutral-darkest);
  }
</style>
