<script>
    let { name, label, placeholder } = $props();
</script>

<label>
    {label}
    <textarea {name} {placeholder} required></textarea>
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-body-lg);

        textarea {
            resize: vertical;
            font-size: var(--font-size-body-lg);
            font-family: var(--font-primary);
            padding: var(--space-md);
            border: solid var(--space-3xs) var(--primary-neutral);
            border-radius: var(--space-md);
            min-height: 250px;
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
