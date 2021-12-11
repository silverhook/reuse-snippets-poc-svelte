<script>
	import {sort, komadi} from "./store";
	import DodajKomad from './DodajKomad.svelte';
	import Komad from './Komad.svelte';
		// let muzke = [
		// {"naslov": "fazlja","votes": 0},
		// {"naslov": "dusan","votes": 0},
		// {"naslov": "to je mikic","votes": 0},
		// ]
	let muzke = $komadi;
	$: {muzke = $komadi;}
	console.log("komadi", komadi)
	console.log("muzke", muzke)
	function novKomad(event) {
		// console.log(event.detail)
			$komadi = event.detail;
		
	}
	function removeKomad(event) {
		event.detail.remove = true;
		$komadi = event.detail;
		// muzke = muzke.filter(item => item !== event.detail)
	}
	function modifyKomad(event) {
		event.detail.remove = false;
		console.log(event.detail)
		$komadi = event.detail;
		// console.log(event.detail.naslov)
	}
	console.log(muzke)
	

</script>
<main>
	<!-- <input type="checkbox" bind:checked={$admin}> -->
	
	
	<div class="komadi">
		<DodajKomad on:novKomad={novKomad}></DodajKomad>
		{#each $sort ? [...muzke].sort((a,b) => (b.votes - a.votes)):muzke as komad}
			<Komad bind:komad on:removeKomad={removeKomad} on:modifyKomad={modifyKomad}></Komad>
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
		min-width: 80%;
		margin: 0;
		padding: 1em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>