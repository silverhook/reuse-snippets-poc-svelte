<script>
    export let toggle = false;
    export let yt = false;

</script>
<style>
    div {
        transform: rotate(90deg);
        transition: ease-in-out 0.1s;

    }
    div.rotated {
        transform: rotate(0);
        transition: ease-in-out 0.1s;
    }
    div.yt {
        transform: rotate(-90deg);
        transition: ease-in-out 0.1s;
    }
    .red {
        color: red;
    }
</style>
<div class="{toggle?'rotated':''} {yt?'yt red':''}">
    ▼
</div>