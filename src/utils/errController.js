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

export const errControllerOneArgv = (resData, callback) => {
    if(resData.length !== 1){
        return logInvalidInput();
    }
    else {
        callback();
    }
}
