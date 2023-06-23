import fs from "fs";
import {logOperationFailed} from "../utils/mesLogger.js";

export const rm = async (file) => {
    try {
        if (!fs.existsSync(file)) {
            logOperationFailed();
            return;
        }
        fs.unlinkSync(file);
    }
    catch (e) {
        logOperationFailed();
    }
}
