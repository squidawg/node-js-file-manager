import fs from "fs";
import path from "path";
import {logOperationFailed} from "../utils/mesLogger.js";

export const cp = async (oldPath, filePath) => {

    try{
        if (!fs.existsSync(oldPath)) {
            logOperationFailed();
            return;
        }
        const filename = path.basename(oldPath);
        const readStream = fs.createReadStream(oldPath);
        const writeStream = fs.createWriteStream(path.join(filePath, filename));

        const stream = readStream.pipe(writeStream);

        readStream.on('error', () => {
            logOperationFailed();
        })
        writeStream.on('error', () => {
            logOperationFailed();
        })
        stream.on('error', () => {
            logOperationFailed();
        })

    }
    catch (e) {
        logOperationFailed();
    }

}
