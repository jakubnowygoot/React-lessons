function distFromAvarage(arr){
    let average;
    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    average = sum / arr.length;
    console.log(sum, average);
    let newArr = [];
    for(let n=0; n<arr.length; n++){
        newArr.push(parseInt(average - arr[n]));
    }
    console.log(newArr);
    return newArr
}
distFromAvarage([0,1,3,4]);