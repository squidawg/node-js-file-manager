import fs  from 'fs'
import path from "path";
import {onFail} from "../utils/mesLogger.js";

export const rename = async (oldPath, fileName) => {
    try{
        const currentFilePath = oldPath.split('/');
        const pathToFile = currentFilePath.slice(0,currentFilePath.length -1).join('/')
        const newPath = path.join(pathToFile, fileName);
        fs.renameSync(oldPath, newPath);
    }
    catch (e) {
        onFail();
    }
};



