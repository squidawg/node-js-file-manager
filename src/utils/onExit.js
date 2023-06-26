import {logFarewellMessage} from "./mesLogger.js";

export const onExit = () => {
    logFarewellMessage();
    process.exit(0);
}
