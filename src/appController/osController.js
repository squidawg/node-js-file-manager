import {eol} from "../os/eol.js";
import {cpus} from "../os/cpus.js";
import {homedir} from "../os/homedir.js";
import {username} from "../os/username.js";
import {architecture} from "../os/architecture.js";
import {logInvalidInput} from "../utils/mesLogger.js";

export const osController = (resData, ...rest) => {
    if(rest.length !== 0){
        logInvalidInput()
    }
    else {
        switch (resData){
            case '--EOL': eol();
                break;
            case '--cpus': cpus();
                break;
            case '--homedir': homedir();
                break;
            case '--username': username();
                break;
            case '--architecture': architecture();
                break;
            default: logInvalidInput();
                break;
        }
    }
}
