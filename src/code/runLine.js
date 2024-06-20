
import { createComponent } from "./createComponent";
import { typeText } from "./typeText";
import { helpers } from "../code/helpers"
import { setScene } from "./setScene";


export async function runLine(lineObj) {
    if (lineObj.type == "action") await runAction(lineObj)
    if (lineObj.type == "text") await runText(lineObj)
    if (lineObj.type == "button") await runButton(lineObj)
}





async function runText(lineObj) {

    // create the SPOKEN componenet and type it out
    if (lineObj.spoken.isSpoken) {
        const component = createComponent({ lineObj }, "spoken")
        console.log(component);
        await typeText(lineObj, component)

    }

    // create the TEXT componenet and type it out
    if (!lineObj.spoken.isSpoken) {
        const component = createComponent({ lineObj }, "text")
        await typeText(lineObj, component)
    }



}

async function runAction(lineObj) {

    // wait
    if (lineObj.command == "wait") {
        const num = parseFloat(lineObj.vars[0]);
        return await helpers.wait(num)
    }

    // loads the image and fades it up
    if (lineObj.type == "action" && lineObj.command == "loadImage") {
        const elementId = lineObj.vars[0];
        const filename = lineObj.vars[1]
        const opacity = parseFloat(lineObj.vars[2])
        await helpers.loadImage(elementId, filename)
        await helpers.fadeToOpacity(elementId, parseFloat(opacity))
    }

    // set scene
    if (lineObj.command == "setScene") {

        return await setScene(lineObj)
    }
}


async function runButton(lineObj) {
    const component = createComponent({ lineObj }, "button")
    await helpers.fadeToOpacity(component.id, 1, 1)
}


