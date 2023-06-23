import fs from "fs";
import path from "path";

export const ls = () => {
    const root = process.cwd();
    const arr = [];
    const files = fs.readdirSync(root);
    files.forEach(file => {
            const itemPath = path.join(root, file);
            try{
                const stats = fs.statSync(itemPath);
                if(stats.isDirectory()) {
                    arr.push({[file] : 'dir'});
                } else {
                    arr.push({[file] : 'file'});
                }
            }
            catch (e) {
                if (e.code === 'ENOENT') {
                    console.error('File or directory not found:', itemPath);
                }
            }
    })

    return arr
};

export const onTransform = (resData) => {
    const tableData = [];
    resData.sort((a, b) => {
        const valueA = Object.keys(a)[0];
        const valueB = Object.keys(b)[0];
        return valueA.localeCompare(valueB);
    }).forEach(item => {
        for (let obj in item) {
            tableData.push({Name: obj, Type: item[obj]});
        }
    });

    console.table(tableData.sort((a, b) => a.Type.localeCompare(b.Type)));
}

export const  onList = () => {
    const resData = ls();
    onTransform(resData);
}
