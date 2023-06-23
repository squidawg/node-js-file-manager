import path from "path";
import fs from "fs";
import {onFail} from "../utils/mesLogger.js";

export const mv = (currentPath, destPath) => {
    try {
        const fileName = currentPath.split('/').at(-1)
        const readStream = fs.createReadStream(currentPath);
        const writeStream = fs.createWriteStream(path.join(destPath, fileName));

        readStream.pipe(writeStream);
        writeStream.on('finish', ()=> {
            fs.unlinkSync(currentPath)
        })
    }
    catch (e) {
        onFail()
    }
}
