import fs from "fs";
import path from "path";

export const cp = async (...userInput) => {
    const [oldPath, filePath] = [...userInput]
    const fileName = oldPath.split('/').at(-1);
    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(path.join(filePath, fileName));

    readStream.pipe(writeStream);
}
