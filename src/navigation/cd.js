import {onFail} from "../utils/mesLogger.js";
import fs from "fs";

export const cd = async (dirPath) => {
    try {
        if (!fs.existsSync(dirPath)) {
            onFail();
            return;
        }
        process.chdir(dirPath)
    }
    catch (e){
        onFail();
    }
}
