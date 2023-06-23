import fs from "fs";
import crypto from "crypto";
import {onFail} from "../utils/mesLogger.js";

export const hash = async (filePath) => {
    try {
        if (!fs.existsSync(filePath)) {
            onFail();
            return;
        }
        const file = fs.readFileSync(filePath);
        const  hash = crypto.createHash('sha256');
        hash.update(file);
        console.log(hash.digest('hex'));
    }
    catch (e) {
        onFail();
    }
}
