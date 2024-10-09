<!--
SPDX-FileCopyrightText: © 2020 Jane Hack <jane@hack.example>
SPDX-License-Identifier: BSD-3-Clause
-->

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
	div.voting h1 {
		width: 2em;
		text-align: center;
		margin-top: auto;
		margin-bottom: auto;
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
		/* background-color: rgb(0, 0, 0); */
		width: 1.6em;
		height: 1.6em;
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
	input[type="number"] {
		height: 0.9em;
		width: 3em;
	}
	img{
		margin: auto;
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
		<img src="static/+.png" on:click={addVote} class="button noselect" alt="+">
		{#if ad}

		<input type="number" bind:value={komad.votes} on:keypress={keypress} on:blur={modKom} id="adsf">
		{:else}
		<h1 class="noselect">{komad.votes}</h1>
		{/if}
		<img src="static/-.png" on:click={remVote} class="button noselect" alt="-">

		{#if ad}
		<div class="triangles">
			<a href="https://www.youtube.com/results?search_query={komad.altnaslov}" target="_blank"><Triange yt={true} /></a>
			<a href="/down/{komad.altnaslov}" download><Triange toggle={true} /></a>
		</div>
			<img src="static/x.png" on:click={destruct} class="button noselect" alt="x">
		{/if}
	</div>

	
</div>
