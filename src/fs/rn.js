import fs  from 'fs'
import path from "path";
import {onFail} from "../utils/mesLogger.js";

export const rename = async (...userInput) => {
    try{
        const [oldPath, fileName] = [...userInput];
        const currentFilePath = oldPath.split('/');
        const pathToFile = currentFilePath.slice(0,currentFilePath.length -1).join('/')
        const newPath = path.join(pathToFile, fileName);
        if(!fs.existsSync(oldPath)){
            onFail();
        }
        fs.renameSync(oldPath, newPath);
    }
    catch (e) {
        onFail();
    }
};



