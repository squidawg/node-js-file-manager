import fs  from 'fs'
import path from "path";
import {logOperationFailed} from "../utils/mesLogger.js";

export const rename = async (oldPath, fileName) => {
    try{
        if (!fs.existsSync(oldPath)) {
            logOperationFailed();
            return;
        }
        const pathToFile = path.dirname(oldPath);
        const newPath = path.join(pathToFile, fileName);
        fs.renameSync(oldPath, newPath);
    }
    catch (e) {
        logOperationFailed();
    }
};



