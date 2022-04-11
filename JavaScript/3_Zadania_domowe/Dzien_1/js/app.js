//1
function getNumber(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return true;
    }
    return false;
}
getNumber([3,4,5,6,7],3 );

//2
let sum = null;
function addTheSameNumbers(number,array){
    for(let i = 0; i < array.length; i++){
        if(number === array[i]){
            sum += array[i];
        }
    }
    if(sum==null)
        return null;
    return sum;
}
addTheSameNumbers(3, [3,3,5,5]); //6

//zadanie dodatkowe 1
function factors(number){
    let table = [];
    if(number <= 0) return table;
    else {
        for(let i=1;i<=number;i++){
            if(number%i === 0) table.unshift(i);
        }
        return table;
    }
}
factors(54);
//[54, 27, 18, 9, 6, 3, 2, 1]

//zadanie dodatkowe 2
function findMissing(input) {
    input.sort((a, b) => a - b);
    let first = input[0];
    return input.find((num, i) => first + i !== num) - 1;
}
console.log(findMissing([1,2,3,5]));

//zadanie dodatkowe 3
function getLastNumbers(lastNumbers,array){
   if (typeof lastNumbers === 'number'){
       let newArr = array.slice(-lastNumbers);
       console.log(newArr);
   }else return [];
}
getLastNumbers(2,[1,2,3,4,5]);