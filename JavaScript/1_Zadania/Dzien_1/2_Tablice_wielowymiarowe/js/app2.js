function print2DArray(dimensionalArray) {
    for(let i=0; i < dimensionalArray.length; i++ ){
        console.log(dimensionalArray[i])
    }
}
console.log(print2DArray([[1, 2, 3, 4], ["Ala", "Adam", "Kasia"], [true, false]]));

//VM514:5 (4) [1, 2, 3, 4]
//VM514:5 (3) ['Ala', 'Adam', 'Kasia']
//VM514:5 (2) [true, false]