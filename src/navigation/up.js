import path from "path";
import fs from "fs";

export const up = async () => {
    const currentDir = process.cwd();
    const parentDir = path.resolve(currentDir, '..');
    if (fs.existsSync(parentDir)){
        process.chdir(parentDir);
    }
}
