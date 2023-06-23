import {logInvalidInput} from "./mesLogger.js";

export const errControllerNoArgv = (resData, callback) => {
    if(resData.length > 0){
        return logInvalidInput();
    }
    else {
        callback();
    }
}

export const errControllerArgv = (resData, callback) => {
    if(resData.length <= 0){
        return logInvalidInput();
    }
    else {
        callback();
    }
}
