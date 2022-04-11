/*
  Poniżej napisz kod rozwiązujący zadania
 */

//1
let getUL = document.querySelector("ex3 ul");
getUL.classList.add("menu");

//2
let changeClass = document.querySelectorAll(".menu li");
for(let i = 0; i < changeClass.length; i++) {
    changeClass[i].classList.add("menuElement");
}

//3
let changeClass = document.querySelectorAll(".menu li");
for(let i = 0; i < changeClass.length; i++) {
    changeClass[i].classList.remove("error");
}