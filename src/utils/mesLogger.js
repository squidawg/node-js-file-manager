import {parseArgs} from "./parseUsername.js";

export const onGreet = () => {
    console.log(`Welcome to the File Manager, ${parseArgs()}!`);
}

export const farewellMessage = () => {
    console.log(`Thank you for using File Manager, ${parseArgs()}, goodbye!`);
}

export const errLogger = () => {
  console.log('Invalid Input');
}

export const onFail = () => {
    console.log('Operation failed');
}

export const currentDir = () =>{
    console.log(`You are currently in ${process.cwd()}`);
}
