# 这里记录一些常用的算法示例

## 排序

### 冒泡

> 冒泡排序要对一个列表多次重复遍历。它要比较相邻的两项，并且交换顺序排错的项。每对列表实行一次遍历，就有一个最大项排在了正确的位置。大体上讲，列表的每一个数据项都会在 其相应的位置 “冒泡”。如果列表有 n 项，第一次遍历就要比较 n-1 对数据。需要注意，一旦列 表中最大(按照规定的原则定义大小)的数据是所比较的数据对中的一个，它就会沿着列表一直 后移，直到这次遍历结束。

#### 优缺点：

冒泡排序需要在最终排列之前不停的交换元素的位置，一般会被认为是最低效的排序方法。但是由于冒泡排序会遍历所有未被排序的部分所以可以做到一些其他排序方法做不到的事情。而且如果整个遍历过程没有进行位置交换就可以认为排序已经完成。因此可以优化冒泡排序

#### 示例：

```ts
// 基本实现
function bubbleSort(arr: Array<Number>) {
  let temp: Number = NaN;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
//  结果优化
function bubbleSort(arr: Array<Number>) {
  let temp: Number = NaN;
  let isExchange: Boolean = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        isExchange = true;
      }
    }
    if (isExchange === false) return arr;
  }
  return arr;
}
```

### 插入

### 快速
