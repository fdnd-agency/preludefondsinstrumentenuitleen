<script>
  import checkIcon from "$lib/assets/check-circle.svg";
  import notDisturbIcon from "$lib/assets/do_not_disturb_on.svg";
  import alertIcon from "$lib/assets/alert-triangle.svg";

  let { status } = $props();

  const statuses = {
    Beschikbaar: { className: "available", icon: checkIcon },
    Uitgeleend: { className: "on-loan", icon: notDisturbIcon },
    "In Reperatie": { className: "repair", icon: alertIcon },
  };

  const current = $derived(statuses[status]);
</script>

<div class="status {current?.className ?? 'unknown'}">
  {#if current}
    <img src={current.icon} alt="" />
    {status}
  {:else}
    <em>Niet beschikbaar</em>
  {/if}
</div>

<style>
  .status {
    --_border-color: var(--neutral-mid-grey);
    --_background-color: var(--neutral-faint-grey);

    display: flex;
    justify-content: space-between;
    padding: var(--space-sm);
    border: 1px solid var(--_border-color);
    border-radius: var(--space-2xs);
    background-color: var(--_background-color);

    &.available {
      --_border-color: var(--positive-neutral);
      --_background-color: var(--positive-lightest);
    }

    &.on-loan {
      --_border-color: var(--caution-neutral);
      --_background-color: var(--caution-lightest);
    }

    &.repair {
      --_border-color: var(--tertiary-neutral);
      --_background-color: var(--tertiary-lightest);
    }
  }
</style>
