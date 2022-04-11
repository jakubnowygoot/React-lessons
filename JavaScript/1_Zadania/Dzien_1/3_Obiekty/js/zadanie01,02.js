let country = {
    capital: "Warszawa",
    population: 4201123,
    president: "Duda",
    primeMinisters: ["Michał Awdaniec","Wincenty z Niałka","Ignacy Jan Paderewski",]
}
console.log(country.capital);
//Warszawa
console.log(country.population);
//4201123
console.log(country.president);
//Duda
console.log(country.primeMinisters);
//['Michał Awdaniec', 'Wincenty z Niałka', 'Ignacy Jan Paderewski']

let timeMachine = {
    shape: "trojkat",
    model: "23v2",
    run: function (date,place){
       console.log(date,place);
    }
}

console.log(timeMachine.shape);
//trojkat
console.log(timeMachine.model);
//23v2
console.log(timeMachine.run("20.05.2000","Wroclaw"));
//20.05.2000 Wroclaw