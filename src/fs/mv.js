import path from "path";
import fs from "fs";
import {logOperationFailed} from "../utils/mesLogger.js";

export const mv = (currentPath, destPath) => {
    try {
        if (!fs.existsSync(currentPath)) {
            logOperationFailed();
            return;
        }
        const filename = path.basename(currentPath);
        const readStream = fs.createReadStream(currentPath);
        const writeStream = fs.createWriteStream(path.join(destPath, filename));
        const stream = readStream.pipe(writeStream);


        readStream.on('error', ()=> {
            logOperationFailed();
        })

        writeStream.on('finish', ()=> {
            fs.unlinkSync(currentPath);
        })

        stream.on('error', () => {
            logOperationFailed();
        })
    }
    catch (e) {
        logOperationFailed();
    }
}
