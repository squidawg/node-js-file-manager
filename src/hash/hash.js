import fs from "fs";
import crypto from "crypto";

export const hash = async (...resdata) => {
    const file = fs.readFileSync(...resdata);
    const  hash = crypto.createHash('sha256');
    hash.update(file);
    console.log(hash.digest('hex'));
}
