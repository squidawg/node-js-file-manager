import {logOperationFailed} from "../utils/mesLogger.js";

export const cd = async (dirPath) => {
    try {
        process.chdir(dirPath)
    }
    catch (e){
        logOperationFailed();
    }
}
