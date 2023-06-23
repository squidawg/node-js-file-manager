import fs  from 'fs'
import {onFail} from "../utils/mesLogger.js";

export const cat  = async (filePath) => {
    try{
        if (!fs.existsSync(filePath)) {
            onFail();
            return;
        }
        const readableStream = fs.createReadStream(filePath, 'utf-8')
        for await (const chunk of readableStream){
            process.stdout.write(chunk)
        }
    }
    catch (e) {
        onFail();
    }
}
