import fs from "fs";

export const isExist = async (filepath) => {
        return await new Promise((resolve) => {
            fs.access(filepath,(e)=>{
                if(e){
                    resolve(false)
                }
                else {
                    resolve(true)
                }
            });
        })
}
