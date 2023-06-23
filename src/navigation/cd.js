import {onFail} from "../utils/mesLogger.js";

export const cd = async (userInput) => {
    try {
        process.chdir(userInput)
    }
    catch (e){
        onFail()
    }
}
