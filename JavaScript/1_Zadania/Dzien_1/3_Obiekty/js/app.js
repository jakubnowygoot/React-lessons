let spoon = {
    isExist: true,
}
let fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);

//false

