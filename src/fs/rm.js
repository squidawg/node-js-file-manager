import fs from "fs";

export const rm = async (userInput) => {
    if(!fs.existsSync(userInput)){
        throw Error('FS operation failed');
    }
    fs.unlinkSync(userInput);
}
