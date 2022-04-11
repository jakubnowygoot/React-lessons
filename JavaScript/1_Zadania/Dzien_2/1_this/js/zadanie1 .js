let car = {
    brand: "bmw",
    color: "black",
    numberOfkilometers: 0,
    printCarinfo(){
        console.log(car.brand,car.color,car.numberOfkilometers)
    },
    drive(km){
        this.numberOfkilometers = km
    }
}
car.services = ['styczen'];

console.log(car);

