<style>
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
    import Triange from './Triange.svelte';
    import {admin, sort} from './store';
    import { createEventDispatcher } from 'svelte';
    let naslov = "";
    const dispatch = createEventDispatcher();
    const toggleSort = () => {sort.set(!$sort)}
    function dodaj() {
        //naslov = naslov.trim().substring(0,25)
        if(naslov == "admin")
            admin.set(!$admin);
        else
            if(naslov != "")
                dispatch('novKomad', {"naslov":naslov,"altnaslov":naslov});
        naslov = ""
    }
</script>
<div class="komad">
<form  on:submit|preventDefault={dodaj}>
    <input type="text" bind:value={naslov} placeholder="Naslov in izvajalec pesmi" class="text">
    <input type="submit" value="+">  
</form>
<h5 on:click={toggleSort} class="noselect"><Triange bind:toggle={$sort} />
</h5>

   </div>
