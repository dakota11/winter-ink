<script>
  import BgImage from "./Game/Components/BgImage.svelte";
  import StartScreen from "./Game/StartScreen/StartScreen.svelte";
  import Game from "./Game/Game/Game.svelte";
  import { _gameStore } from "./code/stores/gameStore";
  import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<div id="app-outer">
  <div id="app-inner">
    <BgImage {_gameStore}></BgImage>
    <!-- <Game {_gameStore} /> -->

    {#if $_gameStore.template == "StartScreen"}
      <StartScreen {_gameStore} />
    {/if}
    {#if $_gameStore.template == "Game"}
      <Game {_gameStore} />
    {/if}
  </div>
</div>

<style>
  #app-outer {
    background-color: black;
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    color: white;
    border: 5px solid rgba(255, 255, 255, 0.477);
  }

  #app-inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
