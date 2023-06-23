import * as zlib from "zlib";
import fs from "fs";
import path from "path";
import {onFail} from "../utils/mesLogger.js";

export const compress = async (currPath, destPath) => {
    try{
        if (!fs.existsSync(currPath)) {
            onFail();
            return;
        }
        const brotliCompress = zlib.createBrotliCompress();
        const filename = path.basename(currPath)
        const readStream = fs.createReadStream(currPath);
        const writeStream = fs.createWriteStream(path.join(destPath, filename));

        const stream = readStream.pipe(brotliCompress).pipe(writeStream);

        readStream.on('error', () => {
            onFail();
        })
        writeStream.on('error', () => {
            onFail();
        })
        stream.on('error', () => {
            onFail()
        })

        stream.on('finish', () => {
            console.log('Compressed...')
        })


    }
    catch (e) {
        onFail();
    }

}
