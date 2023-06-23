import {logOperationFailed} from "../utils/mesLogger.js";
import fs from "fs";

export const cd = async (dirPath) => {
    try {
        if (!fs.existsSync(dirPath)) {
            logOperationFailed();
            return;
        }
        process.chdir(dirPath)
    }
    catch (e){
        logOperationFailed();
    }
}
