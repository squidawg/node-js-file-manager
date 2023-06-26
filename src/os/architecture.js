import os from "os";

export const architecture = () =>{
    const arch = os.arch();
    console.log(`CPU architecture for which Node.js binary has compiled: ${arch}`);
}
