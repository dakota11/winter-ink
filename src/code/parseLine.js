export async function parseLine(line) {
    const lineObject = createLineObj(line)

    return lineObject
}



function createLineObj(line) {
    const typeOf = typeof (line)


    if (typeOf == "string" && line.startsWith(">")) {
        return createAction(line)
    }
    if (typeOf == "string") {
        return createTextLine(line)
    }

    if (typeOf == "object") {
        return createButton(line)
    }
    return line
}

function createTextLine(line) {

    let lineObj = {
        text: null,
        spoken: {
            isSpoken: false,
            speaker: null
        },
        type: "text"
    };

    // Check if the line starts with '@'
    if (line.startsWith('@')) {
        lineObj.spoken.isSpoken = true;

        // Extract the speaker and the rest of the line
        let parts = line.split(' ');
        lineObj.spoken.speaker = parts[0].substring(1);  // Remove the '@' and get the speaker
        lineObj.text = parts.slice(1).join(' ');  // Join the remaining parts to get the rest of the line
    } else {
        // If no '@', the whole line is the text
        lineObj.text = line;
    }

    return lineObj;
}

function createButton(button) {
    let buttonObj = {
        text: button.text,
        index: button.index,
        type: "button"
    }
    return buttonObj
}


function createAction(text) {


    const split = text.split(" ")
    const action = split[0].substring(1).trim()
    let vars = split.slice(1).map(str => str.trim());
    return {
        type: "action",
        command: action,
        isAction: true,
        vars
    }

}



const wait = async function (delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, delay * 1000);
    });
};