import fs  from 'fs'
import path from "path";

export const add = async (filename) => {
    const filepath = path.join(process.cwd(), filename);

    if(fs.existsSync(filepath)){
        console.log('Operation failed')
    }
    fs.writeFileSync(filepath,'');
};
