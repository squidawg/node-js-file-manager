import zlib from "zlib";
import fs from "fs";
import path from "path";
import {logOperationFailed} from "../utils/mesLogger.js";
import {isExist} from "../utils/isExist.js";

export const zipBrotli = async (state, currPath, destPath) => {
    try{
        isExist(currPath).then(exists => {
            if(exists){
                logOperationFailed();
            }
        })

        const brotliCompress = state ? zlib.createBrotliCompress(): zlib.createBrotliDecompress();
        const filename = path.basename(currPath);
        const readStream = fs.createReadStream(currPath);
        const writeStream = fs.createWriteStream(path.join(destPath, filename));

        const stream = readStream.pipe(brotliCompress).pipe(writeStream);

        readStream.on('error', () => {
            logOperationFailed();
        })
        writeStream.on('error', () => {
            logOperationFailed();
        })
        stream.on('error', () => {
            logOperationFailed()
        })

        stream.on('finish', () => {
            console.log( state?'Compressed...':'Decompressed...')
        })

    }
    catch (e) {
        logOperationFailed();
    }

}
