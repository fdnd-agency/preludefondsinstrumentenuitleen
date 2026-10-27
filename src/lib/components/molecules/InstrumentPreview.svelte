<script>
    import Picture from "$lib/components/atoms/Picture.svelte";
    let { related } = $props();

</script>

<a href="/details/{related.key}">
    <Picture
        src={related.photo}
        width="200"
        height="200"
        alt="picture of {related.name}"
    />

    <p>{related.name}</p>
    <p class={related.status.toLowerCase().replace(" ", "-")}>
        {related.status}
    </p>
</a>

<style>
    a {
        text-decoration: none;
        display: inline-block;
        margin: var(--space-md);
        border-bottom: var(--space-2xs) solid var(--primary-neutral);
        transition: 0.3s ease-in-out;

        &:hover p:first-of-type {
            text-decoration: underline;
        }

        &:focus {
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
