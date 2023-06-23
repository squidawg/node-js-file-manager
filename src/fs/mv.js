import path from "path";
import fs from "fs";
import {onFail} from "../utils/mesLogger.js";

export const mv = (currentPath, destPath) => {
    try {
        if (!fs.existsSync(currentPath)) {
            onFail();
            return;
        }
        const filename = path.basename(currentPath);
        const readStream = fs.createReadStream(currentPath);
        const writeStream = fs.createWriteStream(path.join(destPath, filename));
        const stream = readStream.pipe(writeStream);


        readStream.on('error', ()=> {
            onFail();
        })

        writeStream.on('finish', ()=> {
            fs.unlinkSync(currentPath);
        })

        stream.on('error', () => {
            onFail();
        })
    }
    catch (e) {
        onFail();
    }
}
