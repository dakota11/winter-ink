// @ts-nocheck

import TextLine from "../Game/Components/TextLine.svelte"
import SpeechLine from "../Game/Components/SpeechLine.svelte"
import Button from "../Game/Components/Button.svelte"


let uid
function generateUniqueId() {
    uid = 'component-' + Math.random().toString(36).substr(2, 9);

}

export function createComponent(props, type) {

    const target = document.getElementById('story')
    const id = generateUniqueId();

    let component;

    if (type == "text") {
        component = new TextLine({
            target: target,
            props: {
                id: uid,
                ...props
            }
        });
    } else if (type == "button") {
        component = new Button({
            target: target,
            props: {
                id: uid,
                ...props
            }
        });
    } else if (type == "spoken") {
        component = new SpeechLine({
            target: target,
            props: {
                id: uid,
                ...props
            }
        });
    }

    // Retrieve the newly created element by its unique ID
    const element = document.getElementById(uid);

    return element;
}
