function addArrays(array,array2){
    let emptyArray = [];
    for (let i = 0; i < Math.max(array.length, array2.length); i++) {
        emptyArray.push((array[i] || 0) + (array2[i] || 0));
    }
    return emptyArray;
}
console.log(addArrays([1,2,4,5],[2,3,4,5,6]));