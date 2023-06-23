import fs from "fs";
import path from "path";
import {onFail} from "../utils/mesLogger.js";

export const cp = async (oldPath, filePath) => {
    try{
        const fileName = oldPath.split('/').at(-1);
        const readStream = fs.createReadStream(oldPath);
        const writeStream = fs.createWriteStream(path.join(filePath, fileName));

        readStream.pipe(writeStream);
    }
    catch (e) {
        onFail();
    }
}
