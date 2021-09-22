function getFibonacciNumbers(n) {
    let array = [0,1];
    let newElem;
    for (i=0; i < (n - 2); i++) {
        newElem = array[array.length - 1] + array[array.length - 2];
        array.push(newElem);
    }
    console.log(array);
    return array
}
getFibonacciNumbers(9)
