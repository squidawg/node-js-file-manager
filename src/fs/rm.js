import fs from "fs";
import {onFail} from "../utils/mesLogger.js";

export const rm = async (file) => {
    try {
        fs.unlinkSync(file);
    }
    catch (e) {
        onFail()
    }
}
