import os from "os";

export const dirController = () => {
    const homeDirectory = os.homedir();
    process.chdir(homeDirectory);
}
