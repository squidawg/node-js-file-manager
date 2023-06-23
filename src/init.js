import readline from "readline";
import { controller } from "./utils/controller.js";
import { dirController } from "./utils/dirController.js";
import {currentDir, farewellMessage, onGreet} from "./utils/mesLogger.js";

const awaitUserInput = async () => {
    const argvTemplate = '--username='
    const argvs = process.argv
        .slice(2)
        .find(argv => argv.startsWith(argvTemplate))

    if(!argvs){
        onExit();
    }
    onGreet();
    dirController();
    currentDir();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.prompt();
    rl.on('line', async (line) => {
        if(line ==='.exit'){
            onExit();
        }
        await controller(line);
    })

    rl.on('close', () => {
        onExit();
    });

}

const onExit = () => {
    farewellMessage();
    process.exit(0);
}


const init = async () => {
    await awaitUserInput();
}

await init();
