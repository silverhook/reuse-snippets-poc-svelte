<script>
	import DodajKomad from './DodajKomad.svelte';
	import Komad from './Komad.svelte';
		let muzke = [
		{"naslov": "fazlja","votes": 0},
		{"naslov": "dusan","votes": 0},
		{"naslov": "to je mikic","votes": 0},
		]
	function novKomad(event) {
		muzke = [event.detail,...muzke ]
	}

</script>
<main>
	<DodajKomad on:novKomad={novKomad}></DodajKomad>
	
	<div class="komadi">
		{#each muzke as komad}
			<Komad bind:komad></Komad>
		{/each}
	</div>
	
	
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
			}
	div.komadi {
		align-self: center;
		width: 80%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>