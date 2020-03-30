/**
 * 冒泡排序
 */
function bubbleSort(arr: Array<Number>) {
  let temp: Number = NaN;
  let isExchange: Boolean;
  for (let i = 0; i < arr.length; i++) {
    isExchange = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr[j], temp);
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        isExchange = true;
      }
    }
    if (isExchange === false) return arr;
    console.log(arr, isExchange);
  }
  return arr;
}

export { bubbleSort };
