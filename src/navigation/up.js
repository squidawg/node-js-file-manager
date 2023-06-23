import path from "path";

export const up = async () => {
    const currentDir = process.cwd();
    const parentDir = path.resolve(currentDir, '..');
    process.chdir(parentDir);

}
