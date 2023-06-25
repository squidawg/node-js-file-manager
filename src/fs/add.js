import fs from 'fs'
import path from "path";
import {logOperationFailed} from "../utils/mesLogger.js";
import {isExist} from "../utils/isExist.js";

export const add = async (filename) => {
        const filepath = path.join(process.cwd(), filename);
        await isExist(filepath).then(e=>{
            if(!e){
                fs.writeFile(filepath,'',(e) =>{
                    if(e){
                        logOperationFailed();
                    }
                });
            }
            else {
                logOperationFailed()
            }
        }).catch(e => {
            if(e){
                logOperationFailed()
            }
        })
};
