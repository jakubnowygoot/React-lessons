let Calculator = function(){
    this.operations = [];
}

Calculator.prototype.add = function(num1,num2){
    let result = num1+num2;
    let operation = "added " + num1 + " to "+ num2 +" got " + result;
    this.operations.push(operation);
    return result;
}

Calculator.prototype.multiply = function(num1,num2){

}

Calculator.prototype.substract = function(num1,num2){

}
Calculator.prototype.divide = function(num1,num2){
    let result = num1/num2;
    let operation = "divided " + num1 + " by "+ num2 +" got " + result;
    this.operations.push(operation);
    return result;
}

Calculator.prototype.printOperations = function(){
    this.operations.forEach(function(operation){
        console.log(operation);
    })
}
Calculator.prototype.clearOperations = function(){
    this.operations = [];
}

let simpleCalculator = new Calculator();
simpleCalculator.add(20,10);
simpleCalculator.add(13,1);
simpleCalculator.divide(69,13);
simpleCalculator.printOperations();
