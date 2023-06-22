import path from "path";
import fs from "fs";

export const mv = (...userInput) => {
    const [currentPath, destPath] = [...userInput]
    const fileName = currentPath.split('/').at(-1)
    const readStream = fs.createReadStream(currentPath);
    const writeStream = fs.createWriteStream(path.join(destPath, fileName));

    readStream.pipe(writeStream);

    writeStream.on('finish', ()=> {
        fs.unlinkSync(currentPath)
    })
}
