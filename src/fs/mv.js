import path from "path";
import fs from "fs";
import {logOperationFailed} from "../utils/mesLogger.js";
import {isExist} from "../utils/isExist.js";

export const mv = (currentPath, destPath) => {
    try {
        isExist(currentPath).then(exists => {
            if(exists){
                logOperationFailed();
            }
        })
        const filename = path.basename(currentPath);
        const readStream = fs.createReadStream(currentPath);
        const writeStream = fs.createWriteStream(path.join(destPath, filename));
        const stream = readStream.pipe(writeStream);


        readStream.on('error', ()=> {
            logOperationFailed();
        })

        writeStream.on('finish', ()=> {
            fs.unlink(currentPath,(e)=>{
                if(e){
                    logOperationFailed()
                }
            });
        })

        stream.on('error', () => {
            logOperationFailed();
        })
    }
    catch (e) {
        logOperationFailed();
    }
}
