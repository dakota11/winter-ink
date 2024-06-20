<script>
    import { onMount } from "svelte";
    export let _gameStore;
    import inkText from "../../assets/story/story.json?raw";
    import { continueStory } from "../../code/continueStory";
    import { Story } from "inkjs";

    import Left from "./Left.svelte";
    import Right from "./Right.svelte";

    onMount(() => {
        console.clear();
        $_gameStore.images.bg.filepath = null;
        const inkStory = new Story(inkText);
        window.ink = inkStory;
        continueStory(null, inkStory);
    });
</script>

<div class="" id="main">
    <div class="left">
        <Left {_gameStore} />
    </div>
    <div class="right px-4">
        <Right />
    </div>
</div>

<style>
    #main {
        z-index: 3;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
    }

    .left {
        width: 40%;

        height: 100%;
    }

    .right {
        width: 60%;
        overflow: hidden;
        height: 100%;
    }
</style>
