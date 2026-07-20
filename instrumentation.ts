import { NodeSDK } from "@opentelemetry/sdk-node";
import { LangfuseSpanProcessor } from "@langfuse/otel";
import { loadEnvFile } from "process";

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

export const langfuseSpanProcessor = new LangfuseSpanProcessor();

const sdk = new NodeSDK({
    spanProcessors: [langfuseSpanProcessor],
});

sdk.start();