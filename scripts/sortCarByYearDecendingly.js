function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log("Before: ", cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for(let i = 0; i < result.length; i++){
    for(let j = 0; j < result.length-1; j++){
      // Rubah code ini dengan array hasil sorting secara ascending
      if(result[j].year < result[j+1].year){
        const tmp = result[j];
        result[j] = result[j+1];
        result[j+1] = tmp;
      }
    }
 }
  //return the sorted array
  console.table("After: ", result);
  return result;
}
