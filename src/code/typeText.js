import Typewriter from "typewriter-effect/dist/core";
import convertToHTML from "markdown-to-html-converter";



export function typeText(line, div) {
    // let formattedLine = convertToHTML(line.text, div);
    let formattedLine = line.text
    const typewriter = new Typewriter(div, {
        autoStart: false,
        cursor: "",
        deleteSpeed: 0,
        delay: 20,
        skipAddStyles: true,
    });

    return new Promise((resolve) => {
        typewriter
            .typeString(formattedLine)
            .callFunction(() => {
                // Uncomment these lines if needed
                // console.log('typingDone = true;');
                // outputLoop.setLineToDone(line.index);
                resolve("done");
            })
            .start();
    });
}   