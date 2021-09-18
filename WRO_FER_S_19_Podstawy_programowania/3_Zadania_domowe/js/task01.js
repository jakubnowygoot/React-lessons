
function getSecondMaxNumber(array){
    firstLargestNumber = Math.max(...array);

    index = array.indexOf(firstLargestNumber);

    array.splice(index, 1);

    secondLargestNumber = Math.max(...array);

    return (secondLargestNumber);
}

getSecondMaxNumber([10,23,42,33,100,94])


//wynik to 94