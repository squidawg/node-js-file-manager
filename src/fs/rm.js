import fs from "fs";
import {logOperationFailed} from "../utils/mesLogger.js";

export const rm = async (file) => {
    try {
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
