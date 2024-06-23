<script>
    import { onMount } from "svelte";
    import { createSnow, showSnow } from "pure-snow.js";

    export let _gameStore;

    function startGame() {
        $_gameStore.template = "Game";
    }

    onMount(() => {
        createSnow(); // creates snowflakes and generate css for them
        showSnow(true); // snow can be disabled using showSnow function
    });
</script>

<div id="start-screen">
    <div class="wrapper josefin">
        <div class="w-100 h-100" id="snow" data-count="300"></div>
        <div class="game-title">WINTER</div>
        <div class="buttons">
            <button on:click={startGame} class="btn btn-link s4"
                ><i class="bi bi-chevron-compact-right"></i>NEW GAME</button
            >
            <div class="divider">*</div>
            <button on:click={startGame} class="btn btn-link s4"
                ><i class="bi bi-chevron-compact-right"></i>LOAD SAVED</button
            >
            <div class="divider">*</div>
            <button on:click={startGame} class="btn btn-link s4"
                ><i class="bi bi-chevron-compact-right"></i>SETTINGS</button
            >
        </div>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column; /* Stack elements vertically */
    }
    #start-screen {
        z-index: 2;
        position: relative;
        height: 100%;
    }

    .game-title {
        text-align: center;
        width: 100%;
        font-size: 12vw;
        color: white;

        text-shadow: 2px 2px 5px black;
        opacity: 0.8;
    }

    #snow {
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
    }

    .btn {
        z-index: 1;
        font-size: 2vw;
        text-decoration: none;
        color: rgb(202 187 217);
        font-weight: 600;
        text-shadow: 2px 2px 5px rgb(87, 87, 87);

        display: inline-block; /* Ensures the transform works correctly */
        transition: transform 0.3s ease; /* Smooth transition */
        margin-right: 30px;
    }

    .btn:hover {
        color: rgb(231, 231, 231);
        transform: scale(
            1.2
        ); /* Scale the text to 1.2 times its original size */
    }

    .buttons {
        line-height: 100px;
        z-index: 3;
        display: flex;
        transform: translateY(100px); /* Offset by 100px */
    }

    .divider {
        color: #363636;
        font-size: 50px;
        display: none;
    }

    .grow-text {
    }

    .grow-text:hover {
    }
</style>
