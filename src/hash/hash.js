import fs from "fs";
import crypto from "crypto";
import {logOperationFailed} from "../utils/mesLogger.js";

export const hash = async (filePath) => {
    try {
        const file = await fs.promises.readFile(filePath);
        const  hash = crypto.createHash('sha256');
        hash.update(file);
        console.log(hash.digest('hex'));
    }
    catch (e) {
        logOperationFailed();
    }
}


