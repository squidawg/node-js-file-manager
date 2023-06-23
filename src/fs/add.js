import fs from 'fs'
import path from "path";
import {logOperationFailed} from "../utils/mesLogger.js";
import {isExist} from "../utils/isExist.js";

export const add = async (filename) => {
    try{
        const filepath = path.join(process.cwd(), filename);

        isExist(filepath).then(exists => {
            if(exists){
                logOperationFailed();
            }
        })

        await fs.writeFile(filepath,'',(e)=>{
            if(e){
                logOperationFailed();
            }
        });
    }
    catch (e) {
        logOperationFailed();
    }
};
