
import { parseLine } from "./parseLine";
import { runLine } from "./runLine"


export async function continueStory(choiceIndex = null, inkStory) {
    if (choiceIndex !== null) {
        inkStory.ChooseChoiceIndex(choiceIndex);
    }

    while (inkStory.canContinue) {
        const line = inkStory.Continue();
        const lineObj = await parseLine(line);
        await runLine(lineObj);
    }

    inkStory.currentChoices.forEach(async (element) => {
        const lineObj = await parseLine(element);
        await runLine(lineObj);
    });

}

