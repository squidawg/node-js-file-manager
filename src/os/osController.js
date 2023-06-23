import {eol} from "./eol.js";
import {cpus} from "./cpus.js";
import {homedir} from "./homedir.js";
import {username} from "./username.js";
import {architecture} from "./architecture.js";
import {errLogger} from "../utils/mesLogger.js";

export const osController = (resData) => {
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
        default: errLogger();
            break

    }
}
