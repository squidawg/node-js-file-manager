import zlib from "zlib";
import fs from "fs";
import path from "path";

export const decompress = (currPath, destPath) => {

    const brotliCompress = zlib.createBrotliDecompress();
    const filename = currPath.split('/').at(-1)
    const readStream = fs.createReadStream(currPath);
    const writeStream = fs.createWriteStream(path.join(destPath,filename));

    const stream = readStream.pipe(brotliCompress).pipe(writeStream);

    stream.on('finish', () => {
        console.log('Decompressed...')
    })
}
