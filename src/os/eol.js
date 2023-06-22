import os from "os";

export const eol = () => {
    const EOL = os.EOL;
    console.log(JSON.stringify(`Default system End-Of-Line: ${EOL}`));
}
