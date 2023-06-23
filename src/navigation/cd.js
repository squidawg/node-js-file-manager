import {logOperationFailed} from "../utils/mesLogger.js";
import fs from "fs";
import {isExist} from "../utils/isExist.js";

export const cd = async (dirPath) => {
    try {
        isExist(dirPath).then(exists => {
            if(exists){
                logOperationFailed();
            }
        })
        process.chdir(dirPath)
    }
    catch (e){
        logOperationFailed();
    }
}
