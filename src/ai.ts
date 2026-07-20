import { ChatOpenAI } from "@langchain/openai";
import { prompt } from "./prompt";
import { topic } from "./topics";
import { loadEnvFile } from "process";

const randomTopic = topic.topics[Math.round(Math.random() * (topic.topics.length - 1))]
const randomStyle = topic.formats[Math.round(Math.random() * (topic.formats.length - 1))]
console.log(randomStyle, randomTopic)
const agent = new ChatOpenAI({
    model: "gpt-5.4-mini",
});

try {
    loadEnvFile();
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log(error)
    }
}

export async function ridgeway_boss() {
    const output = await agent.invoke(
        [{ role: "system", content: prompt }, { role: "human", content: `Your topic is ${randomTopic}. Please generate the text in the following format: ${randomStyle}` }]);
    console.log(output);
    // const output = { content: "Myth: chain spots always win. Fact: Ridgeway family-run gems hit different, from chai to kabab. I’ll take the local vibe, fresh flavors, and halal comfort any day." }
    return output;
}

ridgeway_boss()