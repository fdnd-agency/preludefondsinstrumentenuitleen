<script>
    let { data } = $props();
    const instruments = $derived(data.instruments);
</script>

<main class="container">
	<div class="overview">
		<section class="available">
			<span>??</span> beschikbaar
		</section>

		<section class="loaned">
			<span>??</span> uitgeleend
		</section>

		<section class="repairs">
			<span>??</span> in reparatie
		</section>
	</div>

	<div class="lists">
		<section class="preview">
			<h3>Instrumenten lijst preview</h3>
			<p>Instrumenten lijst word ingeladen</p>
            <a href="/">Bekijk alles</a>
		</section>

		<section class="damage">
			<h3>Schade lijst</h3>
			<p>Schade lijst word ingeladen</p>
            <a href="">Bekijk alles</a>
		</section>

		<section class="actions">
			<h3>Actie lijst</h3>
			<p>Actie lijst word ingeladen</p>
            <a href="">Bekijk alles</a>
		</section>
	</div>
</main>

<style>
    main{
        margin-left: 15vw;
        margin-right: 15vw;
    }

	.container {
		background-color: var(--primary-lighter);
		color: var(--neutral-white);
		padding: 2rem;
		min-height: 100vh;
		box-sizing: border-box;
	}

	.overview {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.overview section {
		padding: 1rem 1.5rem;
		border-radius: 0.5em;
		text-align: center;
	}

	.available {
		background-color: var(--positive-lighter);
	}

	.loaned {
		background-color: var(--caution-lighter);
	}

	.repairs {
		background-color: var(--tertiary-lighter)
	}

	.lists {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.preview {
		grid-column: 1 / -1;
		background-color: var(--neutral-light-grey);
		padding: 1.5rem;
		border-radius: 1em;
        min-height: 15em;
	}

	.damage {
		background-color: var(--neutral-light-grey);
		padding: 1.5rem;
		border-radius: 1em;
        min-height: 15em;
	}

	.actions {
		background-color: var(--neutral-light-grey);
		padding: 1.5rem;
		border-radius: 1em;
        min-height: 15em;
	}
</style>