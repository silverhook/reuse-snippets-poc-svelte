<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import Triange from './Triange.svelte';
	import {admin} from "./store"

	let ad;
	admin.subscribe(value => {
		ad = value;
	})
    let naslov = "";
    const dispatch = createEventDispatcher();
    function destruct() {
        dispatch('removeKomad', komad);
    }

	export let komad;
	const addVote = () => {
		let kom = komad;
		kom.votes++;
		dispatch('modifyKomad', kom)
	}
	const remVote = () => {
		let kom = komad;
		kom.votes--;
		dispatch('modifyKomad',kom)
	}
	const modKom = () => {
		let kom = komad;
		dispatch('modifyKomad',kom)
	}
	const keypress = event => {
		if(event.charCode == 13) {
			event.target.blur()
		};
	}

	

</script>
<style>
	h2, h1 {
		font-size: 1.1rem;
		/*display: inline-block;*/
		margin: 0;
		max-width: 60vw;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	h2 {
		align-self: flex-end;
	}
	div.voting {
		display: flex;
		flex-wrap: nowrap;
		margin-left: auto;
	}
	div.voting * {
		margin: 0 0.1em;
	}
	.button {
		color: #E7E7E7;
		opacity: 0.3;
		background-color: rgb(0, 0, 0);
		border-radius: 50%;
		width: 1.5em;
		height: 1.5em;
		padding: 0em;
		text-align: center;
	}
	.button:hover {
		opacity: 0.7;
		transition: ease-in-out 0.1s;

	}

	a:hover {
		text-decoration: none;
		color: red;
		transition: ease-in-out 0.1s;
	}
	.red {
		background-color: rgb(209, 55, 55);;
	}
	input[type="text"] {
		width: fit-content;
		max-width: 100%;
	}
	input[type="number"] {
		width: 3em;
	}
	

	.triangles {
		display: flex;
		align-items: center;
	}
</style>

<div class="komad">
	{#if ad}
	<h1 bind:textContent={komad.altnaslov} on:keypress={keypress} on:blur={modKom} contenteditable="true"></h1>
	{:else}
	<h1>{komad.naslov}</h1>
	{/if}
	<span></span>
	<div class="voting" >
		<h2 on:click={addVote} class="button noselect">+</h2>
		{#if ad}
		<input type="number" bind:value={komad.votes} on:keypress={keypress} on:blur={modKom} id="adsf">
		{:else}
		<h2 class="noselect">{komad.votes}</h2>
		{/if}
		<h2 on:click={remVote} class="button noselect">-</h2>
		{#if ad}
		<div class="triangles">
			<a href="https://www.youtube.com/results?search_query={komad.altnaslov}" target="_blank"><Triange yt={true} /></a>
			<a href="/down/{komad.altnaslov}" download><Triange toggle={true} /></a>
		</div>

			<h2 on:click={destruct} class="button red noselect">x</h2>
		{/if}
	</div>

	
</div>
