let planets = [
    {
        name: "Merkury",
        numberOfMoons: 0
    },
    {
        name: "Wenus",
        numberOfMoons: 0
    },
    {
        name: "Ziemia",
        numberOfMoons: 1
    },
    {
        name: "Mars",
        numberOfMoons: 2
    },
    {
        name: "Jowisz",
        numberOfMoons: 63
    },
    {
        name: "Saturn",
        numberOfMoons: 60
    },
    {
        name: "Uran",
        numberOfMoons: 27
    },
    {
        name: "Neptun",
        numberOfMoons: 13
    }
];
function sortPlanet(planets){
    planets.sort(function(a, b) {
        return parseFloat(b.numberOfMoons) - parseFloat(a.numberOfMoons);
    });

}

sortPlanet(planets);

// 0: {name: 'Jowisz', numberOfMoons: 63}
// 1: {name: 'Saturn', numberOfMoons: 60}
// 2: {name: 'Uran', numberOfMoons: 27}
// 3: {name: 'Neptun', numberOfMoons: 13}
// 4: {name: 'Mars', numberOfMoons: 2}
// 5: {name: 'Ziemia', numberOfMoons: 1}
// 6: {name: 'Merkury', numberOfMoons: 0}
// 7: {name: 'Wenus', numberOfMoons: 0}