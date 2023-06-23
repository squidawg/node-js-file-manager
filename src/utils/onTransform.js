export const onTransform = (resData) => {
  const tableData = [];
  resData.sort((a, b) => {
    const valueA = Object.keys(a)[0];
    const valueB = Object.keys(b)[0];
    return valueA.localeCompare(valueB);
  }).forEach(item => {
    for(let obj in item){
      tableData.push({ Name: obj, Type: item[obj]});
    }
  });

  console.table(tableData.sort((a,b) => a.Type.localeCompare(b.Type)));
}
