import fs  from 'fs'
import path from "path";

export const rename = async (...userInput) => {
    const [oldPath, fileName] = [...userInput];
    const currentFilePath = oldPath.split('/');
    const pathToFile = currentFilePath.slice(0,currentFilePath.length -1).join('/')
    const newPath = path.join(pathToFile, fileName);
    if(!fs.existsSync(oldPath)){
        throw Error('FS operation failed');
    }
    fs.renameSync(oldPath, newPath);

};

//rn /Users/zhenyaprivet/Desktop/untitled/test2.txt test2.txt

