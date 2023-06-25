import fs from "fs";
import path from "path";
import {logOperationFailed} from "../utils/mesLogger.js";
import {isExist} from "../utils/isExist.js";

export const cp = async (oldPath, filePath) => {
    try{
        const filename = path.basename(oldPath);
        const readStream = fs.createReadStream(oldPath);
        const writeStream = fs.createWriteStream(path.join(filePath, filename));

        const stream = readStream.pipe(writeStream);

        readStream.on('error', () => {})
        writeStream.on('error', () => {})
        stream.on('error', () => {
            logOperationFailed();
        })

    }
    catch (e) {
        logOperationFailed();
    }

}
