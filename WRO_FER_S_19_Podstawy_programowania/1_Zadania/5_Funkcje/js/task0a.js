const sum = [2, 2, 3].reduce(add,0);

function add(accumulator, a) {
    return accumulator + a;
}

console.log(sum);


//wynik to 7