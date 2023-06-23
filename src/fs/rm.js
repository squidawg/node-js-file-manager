import fs from "fs";
import {logOperationFailed} from "../utils/mesLogger.js";
import {isExist} from "../utils/isExist.js";

export const rm = async (file) => {
    try {
        isExist(file).then(exists => {
            if(exists){
                logOperationFailed();
            }
        })
        fs.unlink(file,(e)=>{
            if(e){
                logOperationFailed()
            }
        });
    }
    catch (e) {
        logOperationFailed();
    }
}
