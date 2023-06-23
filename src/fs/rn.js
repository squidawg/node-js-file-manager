import fs  from 'fs'
import path from "path";
import {logOperationFailed} from "../utils/mesLogger.js";
import {isExist} from "../utils/isExist.js";

export const rename = async (oldPath, fileName) => {
    try{
        isExist(oldPath).then(exists => {
            if(exists){
                logOperationFailed();
            }
        })
        const pathToFile = path.dirname(oldPath);
        const newPath = path.join(pathToFile, fileName);
        fs.rename(oldPath, newPath, (e) =>{
            logOperationFailed()
        });
    }
    catch (e) {
        logOperationFailed();
    }
};



