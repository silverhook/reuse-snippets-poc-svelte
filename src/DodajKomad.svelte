<style>
    input {
        border: none;
        background: #222;
        color: white;
        align-items: baseline;
    }
    .text {
        min-width: 20%;
        width: max-content;
    }
    h5 {
        margin: 0 1em;
        padding: 0.1em;
    }
</style>
<script>
    import {admin, sort} from './store';
    import { createEventDispatcher } from 'svelte';
    let naslov = "";
    const dispatch = createEventDispatcher();
    const toggleSort = () => {sort.set(!$sort)}
    function dodaj() {
        naslov = naslov.trim()
        if(naslov == "admin")
        admin.set(!$admin);
        else
        if(naslov != "")
        dispatch('novKomad', {"naslov":naslov, "votes":1});
        naslov = ""
    }
</script>
<div class="komad">
<form  on:submit|preventDefault={dodaj}>
    <input type="text" bind:value={naslov} placeholder="Naslov in izvajalec pesmi" class="text">
    <input type="submit" value="Dodaj Komad">  
</form>
<h5 on:click={toggleSort} class="noselect">{#if $sort}▼ {:else}▲{/if}
</h5>
   </div>