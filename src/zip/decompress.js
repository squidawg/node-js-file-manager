import zlib from "zlib";
import fs from "fs";
import path from "path";
import {onFail} from "../utils/mesLogger.js";

export const decompress = async (currPath, destPath) => {
    try {
        if (!fs.existsSync(currPath)) {
            onFail();
            return;
        }
        const brotliCompress = zlib.createBrotliDecompress();
        const filename = path.basename(currPath)
        const readStream = fs.createReadStream(currPath);
        const writeStream = fs.createWriteStream(path.join(destPath,filename));

        const stream = readStream.pipe(brotliCompress).pipe(writeStream);

        readStream.on('error', () => {
            onFail();
        })
        writeStream.on('error', () => {
            onFail();
        })

        stream.on('finish', () => {
            console.log('Decompressed...');
        })
        stream.on('error', () => {
            onFail()
        })
    }
    catch (e) {
        onFail();
    }
}
