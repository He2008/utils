import array from '../src/array'


test("two array is equal",()=>{
const arr1 = [1,2,3],arr2 = [2,3,4],arr3=['qweqwe','dsadsad'],arr4=['qweqwe','dsadsad'];
    expect(array.arrayEqual(arr1,arr2)).toBe(false)
    expect(array.arrayEqual(arr3,arr2)).toBe(false)
    expect(array.arrayEqual(arr1,arr1)).toBe(true)
    expect(array.arrayEqual(arr3,arr4)).toBe(true)
})
