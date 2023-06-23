import fs  from 'fs'
import {logOperationFailed} from "../utils/mesLogger.js";
import {isExist} from "../utils/isExist.js";

export const cat  = async (filePath) => {
    try{
        isExist(filePath).then(exists => {
            if(exists){
                logOperationFailed();
            }
        })
        const readableStream = fs.createReadStream(filePath, 'utf-8');
        for await (const chunk of readableStream){
            process.stdout.write(chunk);
        }
    }
    catch (e) {
        logOperationFailed();
    }
}
