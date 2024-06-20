
import { Story } from 'inkjs'; // Assuming you're using the inkjs library
import inkText from "../assets/story/story.json"
import { parseLine } from "./parseLine";
import { runLine } from "./runLine"


let storyInstance;

export function createStory() {
    if (!storyInstance) {
        console.clear();
        storyInstance = new Story(inkText);
    }
    return storyInstance;
}
export const inkStory = createStory();


export async function continueStory(choiceIndex = null) {
    if (choiceIndex !== null) {
        inkStory.ChooseChoiceIndex(choiceIndex);
    }

    while (inkStory.canContinue) {
        const line = inkStory.Continue();
        const lineObj = await parseLine(line);
        await runLine(lineObj);

    }
    for (const element of inkStory.currentChoices) {
        const lineObj = await parseLine(element);
        await runLine(lineObj);
    }
}

