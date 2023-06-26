import os from "os";

export  const username = () => {
  const username = os.userInfo();
  console.log(`Current system user name: ${username.username}`);
}
