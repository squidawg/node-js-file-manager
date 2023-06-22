export const onTransform = (resData) => {
  const test = [];
  resData.sort((a, b) => {
    const valueA = Object.values(a)[0];
    const valueB = Object.values(b)[0];
    return valueA.localeCompare(valueB);
  }).forEach(item => {
    for(let obj in item){
      test.push({ Name: obj, Type: item[obj]});
    }
  });

  console.table(test);
}
