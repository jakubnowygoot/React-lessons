/*
  Poniżej napisz kod rozwiązujący zadania
 */


let changeData = document.querySelector(".ex4 li");
let changeData2 = document.querySelector(".ex4 li:nth-child(2)");
let changeData3 = document.querySelector(".ex4 li:nth-child(3)");
let changeData4 = document.querySelector(".ex4 li:last-child");

changeData.setAttribute("data-id","1");
changeData2.setAttribute("data-id","2");
changeData3.setAttribute("data-id","3");
changeData4.setAttribute("data-id","4");