import { _gameStore } from "../code/stores/gameStore"
import { helpers } from "./helpers";
import { get } from "svelte/store";

export async function setScene(line) {



    _gameStore.updateProperty("currentScene.title", line.vars[0])
    _gameStore.updateProperty("currentScene.character", line.vars[1])

    return
    helpers.music.play(currentScene.id, "loud")
    await helpers.wait(4)

    // FADE IN / OUT SCENE TTILE
    await helpers.fadeToOpacity("scene-title", 1, 2)
    await helpers.wait(3)
    helpers.fadeToOpacity("scene-title", 0, 2)


    // set and fade the bg image
    await helpers.loadImage("bg-image", `${currentScene.id}-default`)
    await helpers.fadeToOpacity("bg-image", 1, 2)
    await helpers.wait(3)
    await helpers.fadeToOpacity("bg-image", 0.4, 2)


    helpers.music.fade("quiet")
    await helpers.wait(3)
    return Promise.resolve(true);
}