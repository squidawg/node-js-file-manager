import {farewellMessage} from "./mesLogger.js";

export const onExit = () => {
    farewellMessage();
    process.exit(0);
}
