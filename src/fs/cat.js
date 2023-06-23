import fs  from 'fs'
import {onFail} from "../utils/mesLogger.js";

export const cat  = async (...userInput) => {
    try{
        const filePath = userInput.at(0)
        const readableStream = fs.createReadStream(filePath, 'utf-8')
        for await (const chunk of readableStream){
            process.stdout.write(chunk)
        }
    }
    catch (e) {
        onFail();
    }
}
