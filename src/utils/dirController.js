import os from "os";
import fs from "fs";

export const dirController = () => {
    const homeDirectory = os.homedir();
    process.chdir(homeDirectory);
}
