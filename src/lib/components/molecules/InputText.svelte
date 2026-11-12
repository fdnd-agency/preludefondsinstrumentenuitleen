<script>
    let { name, label, placeholder, required, value, readonly } = $props();
</script>

<label>
    {label}
    {#if required}<span>* </span>{/if}
    <input type="text" {name} {placeholder} {required} {value} {readonly}/>
</label>

<style>
    label {
        display: grid;
        grid-template-columns: min-content 1fr;
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-body-lg);
        text-wrap: nowrap;

        &:has(input:user-invalid) span::after {
            color: var(--caution-neutral);
            content: " Dit veld is verplicht";
            font-size: var(--font-size-body-md);
            line-height: var(--line-height-body);
            font-weight: var(--font-weight-regular);
        }

        input {
            font-size: var(--font-size-body-lg);
            padding: var(--space-md);
            border: solid var(--space-3xs) var(--primary-neutral);
            border-radius: var(--space-md);
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
            &:read-only{
                background-color: var(--neutral-light-grey);
            }
        }
    }
</style>
