import fs from "fs";

export const isExist = async (filepath) => {
    try {
        await fs.access(filepath, (e) => {
            return true;
        })
    } catch (e) {
        return false
    }
}
