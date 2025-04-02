<!--!
SPDX-SnippetBegin
SPDX-SnippetCopyrightText: © 2020 Jane Hack <jane@hack.example>
SPDX-License-Identifier: BSD-3-Clause
-->


<script>
	import {sort, komadi} from "./store";
	import DodajKomad from './DodajKomad.svelte';
	import Komad from './Komad.svelte';

	let muzke = $komadi;
	$: {muzke = $komadi;}
	console.log("komadi", komadi)
	console.log("muzke", muzke)
	function novKomad(event) {
			$komadi = event.detail;
		
	}
	function removeKomad(event) {
		event.detail.remove = true;
		$komadi = event.detail;
	}
	function modifyKomad(event) {
		event.detail.remove = false;
		$komadi = event.detail;
	}
	console.log(muzke)
	

</script>

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

<!--! SPDX-SnippetEnd -->
