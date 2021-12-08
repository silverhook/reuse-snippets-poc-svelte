<style>


</style>
<script>
    import { createEventDispatcher } from 'svelte';
    let naslov = "";
    const dispatch = createEventDispatcher();

    function dodaj() {
        dispatch('novKomad', {"naslov":naslov, "votes":1});
    }
</script>
<div class="komad">
<form  on:submit|preventDefault={dodaj}>
    <input type="text" bind:value={naslov}>
    <input type="submit" value="Dodaj Komad">
     
</form>
   </div>