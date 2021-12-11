<script>
	import { createEventDispatcher } from 'svelte';
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


</script>
<style>

	h2, h1 {
		font-size: 1.4rem;
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
	.red {
		background-color: rgb(209, 55, 55);;
	}
	.green {
		background-color: rgb(98, 160, 98);
	}
</style>

<div class="komad" >
	<h1>{komad.naslov}</h1>
	<span></span>
	<div class="voting">
		<h2 on:click={addVote} class="button  noselect">+</h2>
		{#if ad}
		<input type="number" bind:value={komad.votes} on:blur={modVote} id="adsf">
		{:else}
		<h2>{komad.votes}</h2>
		{/if}
		<h2 on:click={remVote} class="button  noselect">-</h2>
		{#if ad}
		<h2 on:click={destruct} class="button red noselect">x</h2>
		{/if}
	</div>

	
</div>
