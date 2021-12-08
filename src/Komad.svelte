<script>
	export let komad;
	// let votes = komad.votes;
	const addVote = () => komad.votes++
	const remVote = () => komad.votes--
</script>
<style>

	h2, h1 {
		font-size: 1.5rem;
		display: inline-block;
		margin: 0;
	}
	h2 {
		align-self: flex-end;
	}
	div.voting {
		margin-left: auto;
	}
	.button {
		color: #E7E7E7;
		background-color: #CCC;
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

<div class="komad">
	<h1>{komad.naslov}</h1>
	<span></span>
	<div class="voting">
		<h2 on:click={addVote} class="button green">+</h2>
		<h2>{komad.votes}</h2>
		<h2 on:click={remVote} class="button red">-</h2>
	</div>

	
</div>
