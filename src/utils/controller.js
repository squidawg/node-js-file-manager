import {onList} from "../navigation/ls.js";
import {cat} from "../fs/cat.js";
import {rename} from "../fs/rn.js";
import {up} from "../navigation/up.js";
import {cd} from "../navigation/cd.js";
import {add} from "../fs/add.js";
import {cp} from "../fs/cp.js";
import {rm} from "../fs/rm.js";
import {parseInput} from "./parseInput.js";
import {osController} from "../os/osController.js";
import {hash} from "../hash/hash.js";
import {mv} from "../fs/mv.js";
import {compress} from "../zip/compress.js";
import {decompress} from "../zip/decompress.js";
import {logCurrentDir, logInvalidInput} from "./mesLogger.js";
import {errControllerArgv, errControllerNoArgv} from "./errController.js";


export const controller = async (userInput) => {
    const [operation, ...resData] = parseInput(userInput);
    switch (operation) {
        case 'ls': errControllerNoArgv(resData, onList);
            break;
        case 'cat': errControllerArgv(resData, async () => {
            await cat(...resData);
        })
            break;
        case 'up': errControllerNoArgv(resData, async () => {
            await up();
        })
            break;
        case 'rn': errControllerArgv(resData, async () => {
            await rename(...resData);
        })
            break;
        case 'cd': errControllerArgv(resData, async () => {
            await cd(...resData)
        })
            break;
        case 'add': errControllerArgv(resData, async () => {
            await add(...resData);
        })
            break;
        case 'cp': errControllerArgv(resData, async () => {
            await cp(...resData);
        })
            break;
        case 'rm': errControllerArgv(resData, async () => {
            await rm(...resData);
        })
            break;
        case 'os': errControllerArgv(resData, async () => {
            await osController(...resData);
        })
            break;
        case 'hash': errControllerArgv(resData, async () => {
            await hash(...resData);
        })
            break;
        case 'mv': errControllerArgv(resData, async () => {
            await mv(...resData);
        })
            break;
        case 'compress': errControllerArgv(resData, async () => {
            await compress(...resData);
        })
            break;
        case 'decompress': errControllerArgv(resData, async () => {
            await decompress(...resData);
        })
            break;
        default: logInvalidInput();
            break;
    }
    logCurrentDir();
}

