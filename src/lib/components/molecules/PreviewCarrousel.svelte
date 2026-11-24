<script>
    import { onMount } from "svelte";
    import Preview from "$lib/components/molecules/InstrumentPreview.svelte";
    let { related } = $props();
    let carousel;
    let jsEnabled = $state(false);

    onMount(() => {
        jsEnabled = true;
    });

    function scrollCarousel(direction) {
        carousel.scrollBy({
            left: direction * carousel.clientWidth,
            behavior: "smooth",
        });
    }
</script>

<section>
    <h2>Gerelateerde instrumenten</h2>
    <div class="wrapper">
        <button onclick={() => scrollCarousel(-1)} class:js-enabled={jsEnabled}
            >←</button
        >
        <div class="carousel" bind:this={carousel}>
            {#each related as item}
                <Preview {item} />
            {/each}
        </div>
        <button onclick={() => scrollCarousel(1)} class:js-enabled={jsEnabled}
            >→</button
        >
    </div>
</section>

<style>
    section {
        max-width: clamp(550px, 95%, 1200px);
        margin-inline: auto;
        h2 {
            padding: var(--space-md) 0;
        }
        .wrapper {
            position: relative;
            
            .js-enabled {
                display: grid;
            }
            button {
                display: none;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                border-radius: var(--space-xs);
                background-color: var(--neutral-white);
                width: 40px;
                height: 40px;
                outline: var(--space-3xs) solid var(--neutral-white);
                font-size: var(--font-size-body-lg);
                transition: ease-in-out 0.3s;
                &:first-of-type {
                    left: var(--space-md);
                }
                &:last-of-type {
                    right: var(--space-md);
                }
                &:hover {
                    cursor: pointer;
                    background-color: var(--primary-lightest);
                }
                &:focus-visible {
                    border-radius: var(--space-md);
                    outline: var(--space-3xs) solid var(--primary-neutral);
                    outline-offset: calc(var(--space-xs) * -1);
                }
            }

            .carousel {
                display: flex;
                gap: var(--space-md);
                padding-bottom: var(--space-md);
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                overscroll-behavior-x: contain;
                @media (prefers-reduced-motion: no-preference) {
                    scroll-behavior: smooth;
                }
                :global(a) {
                    flex: 0 0 auto;
                    scroll-snap-align: start;
                }
            }
        }
    }
</style>
