import fs from "fs";
import path from "path";
import {onFail} from "../utils/mesLogger.js";

export const cp = async (oldPath, filePath) => {

    try{
        if (!fs.existsSync(oldPath)) {
            onFail();
            return;
        }
        const filename = path.basename(oldPath);
        const readStream = fs.createReadStream(oldPath);
        const writeStream = fs.createWriteStream(path.join(filePath, filename));

        const stream = readStream.pipe(writeStream);

        readStream.on('error', () => {
            onFail();
        })
        writeStream.on('error', () => {
            onFail();
        })
        stream.on('error', () => {
            onFail();
        })

    }
    catch (e) {
        onFail();
    }

}
