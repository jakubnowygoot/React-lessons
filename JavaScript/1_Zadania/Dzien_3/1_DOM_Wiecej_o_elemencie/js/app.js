/*
  Poniżej napisz kod rozwiązujący zadania
 */

//1
let changeColor = document.querySelector(".ex5 li:nth-child(2)");
changeColor.style.backgroundColor = "green";

let changeColor2 = document.querySelector(".ex5 li:nth-child(4)");
changeColor2.style.backgroundColor = "green";


let changeColor3 = document.querySelector(".ex5 li:nth-child(6)");
changeColor3.style.backgroundColor = "green";
//2

let changeClassBig = document.querySelector(".ex5 li:nth-child(5)");
changeClassBig.classList.add("big");
//3

let changeText = document.querySelector(".ex5 li:nth-child(3) a");
changeText.style.textDecoration = "none";

let changeText2 = document.querySelector(".ex5 li:nth-child(6) a");
changeText2.style.textDecoration = "none";
//w tym ostatnim poleceniu bylo napisane zeby dodac podkreslenie ale we wszystkich bylo juz podkreslenie wiec w 3 i 6 wywalilem podkreslenie