function multiply(array) {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}
console.log(multiply([1, 2, 3, 6, 8]));
