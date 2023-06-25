import path from "path";
import fs from "fs";
import {logOperationFailed} from "../utils/mesLogger.js";

export const mv = (currentPath, destPath) => {
    try {

        const filename = path.basename(currentPath);
        const readStream = fs.createReadStream(currentPath);
        const writeStream = fs.createWriteStream(path.join(destPath, filename));
        const stream = readStream.pipe(writeStream);


        readStream.on('error', ()=> {})

        writeStream.on('finish', ()=> {
            fs.unlink(currentPath,()=>{});
        })

        stream.on('error', () => {
            logOperationFailed();
        })
    }
    catch (e) {
        logOperationFailed();
    }
}
