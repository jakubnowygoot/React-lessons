let addEventButton = document.querySelector(".btn-primary");
let addTdTr = document.querySelector("tbody");
let firstTeam = document.getElementById("team1");
let points = document.getElementById("points1");
let secondTeam = document.getElementById("team2");
let point2 = document.getElementById("points2");
let addSpace = ( " "+"-"+" ");
addEventButton.addEventListener("click",function (event){
    if (firstTeam.value == secondTeam.value){
        console.log("Nie mogą być te same drużyny");
    }else if (points.value < 0 || point2.value < 0 ){
        console.log("Wyniki muszą być dodatnie");
    }else{
        let newTr = document.createElement("tr");
        addTdTr.appendChild(newTr);
        let newTd = document.createElement("td");
        newTr.appendChild(newTd);
        let newTd2 = document.createElement("td");
        newTr.appendChild(newTd2);
        let newTd3 = document.createElement("td");
        newTr.appendChild(newTd3);
        newTd.innerText = firstTeam.value;
        newTd2.innerText = secondTeam.value;
        newTd3.innerText = points.value + addSpace + point2.value;
    }
});