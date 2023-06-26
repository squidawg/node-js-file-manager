import os from "os";

export const homedir = () => {
  const homedir = os.homedir();
  console.log(`Home directory: ${homedir}`);
}
