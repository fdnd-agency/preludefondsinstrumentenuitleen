<script>
    let { name, label, placeholder, required } = $props();
</script>

<label>
    {label}
    <input type="text" name={name} {placeholder} {required} />
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-body-lg);
        input {
            font-size: var(--font-size-body-lg);
            padding: var(--space-sm);
            border: solid var(--space-3xs) var(--primary-neutral);
            border-radius: var(--space-md);
            transition: ease-in-out 0.3s;

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
