import fs  from 'fs'
import {logOperationFailed} from "../utils/mesLogger.js";

export const cat  = async (filePath) => {
    try{
        const readableStream = fs.createReadStream(filePath, 'utf-8');
        for await (const chunk of readableStream){
            process.stdout.write(chunk);
        }
    }
    catch (e) {
        logOperationFailed();
    }
}
