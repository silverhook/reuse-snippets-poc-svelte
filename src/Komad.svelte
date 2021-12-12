<script>
	import { createEventDispatcher } from 'svelte';
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
	const modVote = () => {
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
		display: inline-block;
		margin: 0;
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
	input {
		width: 3em;
	}
	.triangles {
		display: flex;
		align-items: center;
	}
</style>

<div class="komad">
	<h1>{komad.naslov}</h1>
	<span></span>
	<div class="voting" >
		<h2 on:click={addVote} class="button noselect">+</h2>
		{#if ad}
		<input type="number" bind:value={komad.votes} on:keypress={keypress} on:blur={modVote} id="adsf">
		{:else}
		<h2 class="noselect">{komad.votes}</h2>
		{/if}
		<h2 on:click={remVote} class="button noselect">-</h2>
		{#if ad}
		<div class="triangles">
			<a href="https://www.youtube.com/results?search_query={komad.naslov}" target="_blank"><Triange yt={true} /></a>
			<a href="https://d.oliwerix.com/down/{komad.naslov}" download><Triange toggle={true} /></a>
		</div>

			<h2 on:click={destruct} class="button red noselect">x</h2>
		{/if}
	</div>

	
</div>
