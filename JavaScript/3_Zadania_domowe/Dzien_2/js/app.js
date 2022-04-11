//zadanie 1
function Tree(type){
    this.type = type;
};
let newTreeOne = new Tree();
let newTreeTwo = new Tree();
let newTreeThree = new Tree();
Tree.prototype.bloom = function() {
    return "I'm blooming";
}