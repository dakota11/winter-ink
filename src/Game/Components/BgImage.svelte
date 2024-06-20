<script>
    import { onMount } from "svelte";

    export let _gameStore;

    onMount(() => {
        $_gameStore.images.bg.filepath = "/game-images/winter-3.jpg";
    });
</script>

<div
    class="w-100 h-100"
    style="background-image: url({$_gameStore.images.bg.filepath});"
    id="bg-image"
></div>

<style>
    #bg-image {
        z-index: 1;
        overflow: hidden;
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        filter: grayscale(0.5);
        background-size: cover;
    }
</style>
