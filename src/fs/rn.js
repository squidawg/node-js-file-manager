import fs  from 'fs'
import path from "path";
import {logOperationFailed} from "../utils/mesLogger.js";

export const rename = async (oldPath, fileName) => {
    try{
        const pathToFile = path.dirname(oldPath);
        const newPath = path.join(pathToFile, fileName);
        fs.rename(oldPath, newPath, (e) =>{
            if(e){
                logOperationFailed()
            }
        });
    }
    catch (e) {
        logOperationFailed();
    }
};



