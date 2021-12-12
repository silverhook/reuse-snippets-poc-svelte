<script>
	import {sort, komadi} from "./store";
	import DodajKomad from './DodajKomad.svelte';
	import Komad from './Komad.svelte';

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
	
	
	<div class="komadi">
		<DodajKomad on:novKomad={novKomad}></DodajKomad>
		{#each $sort ? [...muzke].sort((a,b) => (b.votes - a.votes)):muzke as komad}
			
			<Komad bind:komad on:removeKomad={removeKomad} on:modifyKomad={modifyKomad} />
		{/each}
	</div>
	
	
</main>
<footer>
	Made with ❤️ by <a href="https://github.com/Oliwerix">@Oliwerix</a>
</footer>
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
	footer {
		color: #999;
		text-align: center;
		padding: 0.2em;
		margin-top: auto;
}
</style>
