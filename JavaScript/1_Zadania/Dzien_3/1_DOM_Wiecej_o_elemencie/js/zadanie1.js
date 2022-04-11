/*
  Poniżej napisz kod rozwiązujący zadania
 */

//zadanie 1
document.getElementsByClassName("firefox" )[0].style.backgroundImage = "url(\"./assets/img/firefox.png\")";
document.getElementsByClassName("edge" )[0].style.backgroundImage = "url(\"./assets/img/edge.png\")";

//zadanie2

document.querySelector(".exercise div a").innerText = "Chrome";
document.querySelector(".exercise div:nth-child(3) a").innerText = "Microsoft Edge";
document.querySelector(".exercise div:nth-child(3) a").setAttribute("href", "https://www.microsoft.com/pl-pl/edge");
document.querySelector(".exercise div:nth-child(4) a").innerText = "Firefox";
document.querySelector(".exercise div:nth-child(4) a").setAttribute("href", "https://www.mozilla.org/pl/firefox/new/");

//zadanie3
 document.getElementsByClassName("chrome" )[0].style.width = "100px";

//poprzednia wartosc jest skreslona i na gorze pojawiwa sie element.style gdzie zapisane sa zmiany w js