<script>
	import Home from "$lib/components/organisms/Home.svelte"

    let { data } = $props();
    const instruments = $derived(data.instruments);
</script>

<main class="container">
	<Home {data}/>
</main>

<style>
    main{
		margin: 0;
		@media (min-width: 650px){
        	margin-left: 15vw;
        	margin-right: 15vw;
		}
    }

	.container {
		background-color: var(--primary-lighter);
		color: var(--neutral-white);
		padding: var(--space-xl);
		min-height: 100vh;
		box-sizing: border-box;
	}
</style>