<style>


</style>
<script>
    import {admin} from './admin';
    import { createEventDispatcher } from 'svelte';
    let naslov = "";
    const dispatch = createEventDispatcher();

    function dodaj() {
        if(naslov == "admin")
        admin.set(!$admin);
        else
        dispatch('novKomad', {"naslov":naslov, "votes":1});
        naslov = ""
    }
</script>
<div class="komad">
<form  on:submit|preventDefault={dodaj}>
    <input type="text" bind:value={naslov}>
    <input type="submit" value="Dodaj Komad">
     
</form>
   </div>