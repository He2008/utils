/**
 * 冒泡排序
 */
function bubbleSort(arr: Array<Number>) {
  let temp: Number = NaN,
    b: Number = NaN;
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
      console.log(arr);
    }
  }
  return arr;
}

export { bubbleSort };
