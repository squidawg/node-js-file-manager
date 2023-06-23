import fs  from 'fs'
import path from "path";
import {onFail} from "../utils/mesLogger.js";

export const add = async (filename) => {
    try{
        const filepath = path.join(process.cwd(), filename);

        if(fs.existsSync(filepath)){
            onFail();
        }
        fs.writeFileSync(filepath,'');
    }
    catch (e) {
        onFail();
    }
};
