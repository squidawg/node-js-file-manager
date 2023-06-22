import fs from "fs";
import path from "path";
import {onTransform} from "../utils/onTransform.js";

export const ls = () => {
    const root = process.cwd();
    const arr = [];
    const files = fs.readdirSync(root);
    files.forEach(file => {
            const itemPath = path.join(root, file);
            try{
                const stats = fs.statSync(itemPath);
                if(stats.isDirectory()) {
                    arr.push({[file] : 'dir'});
                } else {
                    arr.push({[file] : 'file'});
                }
            }
            catch (e) {
                if (e.code === 'ENOENT') {
                    console.error('File or directory not found:', itemPath);
                }
            }
    })

    return arr;
};
export const  onList = () => {
    const resData = ls();
    onTransform(resData);
}
