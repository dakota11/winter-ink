<script>
    import { onMount } from "svelte";

    export let _gameStore;

    $: leftImage = $_gameStore.images.left.filepath;
</script>

<div class="p-2 w-100 h-100">
    <div
        id="left-image"
        style="background-image: url({leftImage});"
        class=" w-100 h-100"
    ></div>
</div>

<style>
    div {
        background-size: cover;
        filter: grayscale(0.5);

        border-radius: 17px;
    }
</style>
