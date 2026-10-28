<script>
    let { data } = $props();
    const instruments = $derived(data.instruments);
</script>

<main class="container">
	<div class="overview">
		<div class="available">
			<span>??</span> beschikbaar
		</div>

		<div class="loaned">
			<span>??</span> uitgeleend
		</div>

		<div class="repairs">
			<span>??</span> in reparatie
		</div>
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

	.overview {
		display: flex;
		justify-content: center;
		gap: var(--space-md);
		margin-bottom: var(--space-xl);
	}

	.overview div {
		padding: var(--space-md) var(--space-lg);
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
		gap: var(--space-lg);
	}

	.preview {
		grid-column: 1 / -1;
		background-color: var(--neutral-light-grey);
		padding: var(--space-lg);
		border-radius: 1em;
        min-height: 15em;
	}

	.damage {
		background-color: var(--neutral-light-grey);
		padding: var(--space-lg);
		border-radius: 1em;
        min-height: 15em;
	}

	.actions {
		background-color: var(--neutral-light-grey);
		padding: var(--space-lg);
		border-radius: 1em;
        min-height: 15em;
	}
</style>