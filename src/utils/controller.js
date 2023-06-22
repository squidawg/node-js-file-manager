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

export const controller = async (userInput) => {
    const [operation, ...resData] = parseInput(userInput);

    switch (operation) {
        case 'ls': onList();
            break
        case 'cat': await cat(...resData);
            break
        case 'up': await up();
            break
        case 'rn': await rename(...resData);
            break
        case 'cd': await cd(...resData);
            break
        case 'add': await add(...resData);
            break
        case 'cp': await cp(...resData);
            break
        case 'rm': await rm(...resData);
            break
        case 'os': osController(...resData);
            break
        case 'hash': await hash(...resData);
            break
    }
    console.log(`You are currently in ${process.cwd()}`);
}

