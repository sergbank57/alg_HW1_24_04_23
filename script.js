function find3and5(arr) {
    if (arr.length < 5) {
      return undefined;
    }
  
    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  
   
    return [arr[2], arr[4]];
  }
//   проверка
  let array = [-12, 1, 2, 3, 5, 6, 8, -5, -1];
  console.log(find3and5(array));
  
  
  
  
  