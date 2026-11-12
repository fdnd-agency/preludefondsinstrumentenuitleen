<script>
    let { name, label, placeholder, required } = $props();
</script>

<label>
    {label}
    {#if required}<span>* </span>{/if}
    <textarea {name} {placeholder} {required}></textarea>
</label>

<style>
    label {
        display: grid;
        grid-template-columns: min-content 1fr;
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-body-lg);
        text-wrap: nowrap;

        &:has(textarea:user-invalid) span::after {
            color: var(--caution-neutral);
            content: " Dit veld is verplicht";
            font-size: var(--font-size-body-md);
            line-height: var(--line-height-body);
            font-weight: var(--font-weight-regular);
        }

        textarea {
            resize: vertical;
            font-size: var(--font-size-body-lg);
            font-family: var(--font-primary);
            padding: var(--space-md);
            border: solid var(--space-3xs) var(--primary-neutral);
            border-radius: var(--space-md);
            min-height: 250px;
            grid-column: 1/-1;

            @media (prefers-reduced-motion: no-preference) {
                transition: ease-in-out 0.3s;
            }

            &:focus {
                outline-offset: calc(var(--space-xs) * -1);
                outline: var(--space-3xs) solid var(--primary-neutral);
            }
            &:user-invalid {
                border-color: var(--caution-neutral);
            }
            &:user-valid {
                border-color: var(--positive-neutral);
            }
        }
    }
</style>
