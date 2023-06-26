import {onList} from "../navigation/ls.js";
import {cat} from "../fs/cat.js";
import {rename} from "../fs/rn.js";
import {up} from "../navigation/up.js";
import {cd} from "../navigation/cd.js";
import {add} from "../fs/add.js";
import {cp} from "../fs/cp.js";
import {rm} from "../fs/rm.js";
import {parseInput} from "../utils/parseInput.js";
import {osController} from "./osController.js";
import {hash} from "../hash/hash.js";
import {mv} from "../fs/mv.js";
import {zipBrotli} from "../zip/zipBrotli.js";
import {logCurrentDir, logInvalidInput} from "../utils/mesLogger.js";
import {errControllerArgv, errControllerNoArgv, errControllerOneArgv} from "../utils/errController.js";


export const controller = async (userInput) => {
    const [operation, resData] = parseInput(userInput);
    switch (operation.toLowerCase()) {
        case 'ls': errControllerNoArgv(resData, async () => {
            await onList();
        });
            break;
        case 'cat': errControllerOneArgv(resData, async () => {
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
        case 'cd': errControllerOneArgv(resData, async () => {
            await cd(...resData)
        })
            break;
        case 'add': errControllerOneArgv(resData, async () => {
            await add(...resData);
        })
            break;
        case 'cp': errControllerArgv(resData, async () => {
            await cp(...resData);
        })
            break;
        case 'rm': errControllerOneArgv(resData, async () => {
            await rm(...resData);
        })
            break;
        case 'os': errControllerArgv(resData, async () => {
            await osController(...resData);
        })
            break;
        case 'hash': errControllerOneArgv(resData, async () => {
            await hash(...resData);
        })
            break;
        case 'mv': errControllerArgv(resData, async () => {
            await mv(...resData);
        })
            break;
        case 'compress': errControllerArgv(resData, async () => {
            await zipBrotli(true, ...resData);
        })
            break;
        case 'decompress': errControllerArgv(resData, async () => {
            await zipBrotli(false, ...resData);
        })
            break;
        default: logInvalidInput();
            break;
    }
    logCurrentDir();
}
