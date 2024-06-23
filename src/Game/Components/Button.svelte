<script>
    export let lineObj, id;
    import { continueStory } from "../../code/inkStory";
    import { _gameStore } from "../../code/stores/gameStore";

    function click() {
        const buttons = document.querySelectorAll(".story button");
        buttons.forEach((button) => button.remove());

        if (lineObj.text == "NEXT") {
            const divToClear = document.getElementById("story");
            divToClear.innerHTML = "";
            _gameStore.updateProperty("lastSpeaker", null);
        }

        continueStory(lineObj.index);
    }
</script>

<div {id}>
    <button
        class:next={lineObj.text == "NEXT"}
        on:click={click}
        class="btn btn-link"
    >
        {#if lineObj.text == "NEXT"}
            <i class="bi bi-chevron-right"></i>
        {/if}
        {lineObj.text}
    </button>
</div>

<style>
    button {
        font-size: 22px;
        text-decoration: none;
    }

    div {
        opacity: 0;
    }

    .next {
        margin-top: 10px;
        margin-left: 23px;
        font-weight: 800;
        color: #d6d6d6;
        font-size: 30px;
    }

    .next:hover {
        color: #9d9d9d;
    }
</style>
