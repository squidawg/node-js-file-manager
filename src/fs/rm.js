import fs from "fs";
import {onFail} from "../utils/mesLogger.js";

export const rm = async (file) => {
    try {
        if (!fs.existsSync(file)) {
            onFail();
            return;
        }
        fs.unlinkSync(file);
    }
    catch (e) {
        onFail();
    }
}
