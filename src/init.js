import readline from "readline";
import { parseArgs } from './utils/parseUsername.js';
import { controller } from "./utils/controller.js";
import { dirController } from "./utils/dirController.js";

const awaitUserInput = async () => {
    console.log(`Welcome to the File Manager, ${parseArgs()}!`);
    dirController();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.prompt();
    rl.on('line', async (line) => {
        if(line ==='.exit'){
            onExit();
        }
        await  controller(line);
    })

    rl.on('close', () => {
        onExit();
    })
}

const onExit = () => {
    console.log(`Thank you for using File Manager, ${parseArgs()}, goodbye!`);
    process.exit(0);
}


const init = async () => {
    await awaitUserInput();
}

await init();
