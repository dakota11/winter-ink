<script>
    export let lineObj, id;
    import { _gameStore } from "../../code/stores/gameStore";

    let isCurrent =
        $_gameStore.currentScene.character != lineObj.spoken.speaker;

    const lastSpeakerSame = $_gameStore.lastSpeaker == lineObj.spoken.speaker;

    console.log(lineObj.spoken.speaker, isCurrent);
</script>

<div class="d-flex">
    <div class="text-line" class:ms-auto={isCurrent == true}>
        {#if !lastSpeakerSame}
            <div class="character">{lineObj.spoken.speaker}</div>
        {/if}

        <div {id}></div>
    </div>
</div>

<style>
    .text-line {
        width: 45%;
        padding: 17px;
        margin-bottom: 10px;
        border-radius: 12px;
        background: rgba(181, 154, 48, 0.627);
        color: rgb(250, 250, 250);
        font-optical-sizing: auto;
        font-style: italic;
        font-size: 1.7vw;
        line-height: 1.05;
    }

    .character {
        color: rgb(41, 41, 41);
        font-weight: 600;
        font-style: normal;
        text-transform: uppercase;
        font-size: 1.2vw;
    }

    .ms-auto {
        background: rgba(110, 123, 223, 0.708);
    }
</style>
