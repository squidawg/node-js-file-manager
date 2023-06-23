import {errLogger} from "./mesLogger.js";

export const errControllerNoArgv = (resData, callback) => {
    if(resData.length > 0){
        return errLogger()
    }
    else {
        callback()
    }
}

export const errControllerArgv = (resData, callback) => {
    if(resData.length <= 0){
        return errLogger()
    }
    else {
        callback()
    }
}
