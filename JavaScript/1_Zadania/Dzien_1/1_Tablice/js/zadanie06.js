function sortArray(array) {
    array.sort(function(a, b) {
        return a - b;
    });
    console.log(array);
}
console.log(sortArray([1,53,35,12,5]));
