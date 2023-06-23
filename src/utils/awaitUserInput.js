import {onExit} from "./onExit.js";
import {logCurrentDir, logGreeting} from "./mesLogger.js";
import {dirController} from "./dirController.js";
import readline from "readline";
import {controller} from "./controller.js";

export const awaitUserInput = async () => {
    const argvTemplate = '--username='
    const argv = process.argv
        .slice(2)
        .find(arg => arg.startsWith(argvTemplate));

    if (!argv) {
        onExit();
    }
    logGreeting();
    dirController();
    logCurrentDir();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.prompt();
    rl.on('line', async (line) => {
        if (line === '.exit') {
            onExit();
        }
        await controller(line);
    })

    rl.on('close', () => {
        onExit();
    });
}
