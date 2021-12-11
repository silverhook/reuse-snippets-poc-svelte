<script>
	import {admin, komadi} from "./store";
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
<svelte:head>
	<title>Requesti Muzko tle</title>
</svelte:head>
<main>
	<!-- <input type="checkbox" bind:checked={$admin}> -->
	<DodajKomad on:novKomad={novKomad}></DodajKomad>
	
	<div class="komadi">
		{#each muzke as komad}
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
		width: 80%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
