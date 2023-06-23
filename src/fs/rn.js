import fs  from 'fs'
import path from "path";
import {onFail} from "../utils/mesLogger.js";

export const rename = async (oldPath, fileName) => {
    try{
        if (!fs.existsSync(oldPath)) {
            onFail();
            return;
        }
        const pathToFile = path.dirname(oldPath);
        const newPath = path.join(pathToFile, fileName);
        fs.renameSync(oldPath, newPath);
    }
    catch (e) {
        onFail();
    }
};



