<script>
    import Picture from "$lib/components/atoms/Picture.svelte";
    let { item } = $props();
</script>

<a href="/details/{item.key}">
    <Picture
        src={item.photo}
        width="200"
        height="200"
        alt="picture of {item.name}"
    />

    <p>{item.name}</p>
    <p class={item.status?.toLowerCase().replace(" ", "-") ?? "Onbekend"}>
        {item.status ?? "Onbekend"}
    </p>
</a>

<style>
    a {
        text-decoration: none;
        display: inline-block;
        margin: var(--space-md);
        border-bottom: var(--space-2xs) solid var(--primary-neutral);
        min-width: 125px;
        transition: 0.3s ease-in-out;

        &:hover p:first-of-type {
            text-decoration: underline;
        }

        &:focus-visible {
            outline: var(--space-2xs) solid var(--primary-neutral);
        }

        p {
            font-weight: var(--font-weight-bold);
            letter-spacing: var(--letter-spacing-heading);
            line-height: var(--line-height-heading);
        }
        p:nth-of-type(1) {
            color: var(--color-heading);
            font-size: var(--font-size-h3);
        }
        p:nth-of-type(2) {
            font-size: var(--font-size-h4);
        }
    }

    .uitgeleend {
        color: var(--caution-neutral);
    }
    .in-reparatie {
        color: var(--tertiary-dark);
    }
    .beschikbaar {
        color: var(--positive-neutral);
    }
</style>
