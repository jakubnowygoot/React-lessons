let car = {
    brand: "bmw",
    color: "black",
    numberOfkilometers: 0,
    printCarinfo(){
        console.log(car.brand,car.color,car.numberOfkilometers);
    },
    drive(km){
        this.numberOfkilometers = km;
    }
}

console.log(car.printCarinfo());
//bmw black 0
car.drive(20);
//undefined
console.log(car.printCarinfo());
//bmw black 20