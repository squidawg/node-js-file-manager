import os from "os";
import fs from "fs";

export const dirController = () => {
    const homeDirectory = os.homedir();
    if (fs.existsSync(homeDirectory)){
        process.chdir(homeDirectory);
    }
}
