import fs from "fs";
import crypto from "crypto";
import {logOperationFailed} from "../utils/mesLogger.js";
import {isExist} from "../utils/isExist.js";

export const hash = async (filePath) => {
    try {
        isExist(filePath).then(exists => {
            if(exists){
                logOperationFailed();
            }
        })
        const file = await fs.promises.readFile(filePath);
        const  hash = crypto.createHash('sha256');
        hash.update(file);
        console.log(hash.digest('hex'));
    }
    catch (e) {
        logOperationFailed();
    }
}


