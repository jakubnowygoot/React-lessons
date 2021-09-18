
function getNegativeNumbers(array) {

    let negativesNumbersInArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativesNumbersInArray.push(array[i]);
        }
    }
    return negativesNumbersInArray;

}
console.log(getNegativeNumbers([-2,32,-4,12,-20]));

//Wynik to [-2, -4, -20]

