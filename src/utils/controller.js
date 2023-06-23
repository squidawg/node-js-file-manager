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
import {currentDir, errLogger} from "./mesLogger.js";

export const controller = async (userInput) => {
    const [operation, ...resData] = parseInput(userInput);
    switch (operation) {
        case 'ls': resData.length > 0? errLogger(): onList();
            break
        case 'cat': resData.length <= 0? errLogger(): await cat(...resData);
            break
        case 'up': resData.length > 0? errLogger(): await up();
            break
        case 'rn': resData.length <= 0? errLogger(): await rename(...resData);
            break
        case 'cd': resData.length <= 0? errLogger(): await cd(...resData);
            break
        case 'add': resData.length <= 0? errLogger(): await add(...resData);
            break
        case 'cp': resData.length <= 0? errLogger(): await cp(...resData);
            break
        case 'rm': resData.length <= 0? errLogger(): await rm(...resData);
            break
        case 'os': resData.length <= 0? errLogger(): osController(...resData);
            break
        case 'hash': resData.length <= 0? errLogger(): await hash(...resData);
            break
        case 'mv': resData.length <= 0? errLogger(): await mv(...resData);
            break
        case 'compress': resData.length <= 0? errLogger(): await compress(...resData);
            break
        case 'decompress': resData.length <= 0? errLogger(): await decompress(...resData);
            break
        default: errLogger();
            break
    }
    currentDir();
}

