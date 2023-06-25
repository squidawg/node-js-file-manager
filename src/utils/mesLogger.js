import {parseArgs} from "./parseArgs.js";

export const logNoArgv = () => {
    console.log('Please provide argv in a way: npm run start -- --username=your_username');
}

export const logGreeting = () => {
    console.log(`Welcome to the File Manager, ${parseArgs()}!`);
}

export const logFarewellMessage = () => {
    console.log(`Thank you for using File Manager, ${parseArgs()}, goodbye!`);
}

export const logInvalidInput = () => {
  console.log('Invalid Input');
}

export const logOperationFailed = () => {
    console.log('Operation failed');
}

export const logCurrentDir = () =>{
    console.log(`You are currently in ${process.cwd()}`);
}
