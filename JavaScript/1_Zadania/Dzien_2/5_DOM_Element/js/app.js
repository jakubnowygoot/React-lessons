var homeElement = document.getElementById("home");
var childElements = document.querySelector(".oferts").querySelectorAll('div, h2, p');
var banner = document.querySelector(".ban");
var blocks = document.querySelectorAll(".block");
var links = document.querySelector(".links").querySelectorAll('li');

/*
  Poniżej napisz kod rozwiązujący zadania
 */

console.log(homeElement.classList);
console.log(childElements.classList);//pseudotablica
console.log(banner.classList);
console.log(blocks.classList);//pseudotablica
console.log(links.classList);//pseudotablica

var blocks = document.querySelectorAll(".block");
for(var i = 0; i < blocks.length; i++){
    console.log(blocks[i]);
}

var links = document.querySelector(".links").querySelectorAll('li');
for(var i = 0; i < links.length; i++){
    console.log(links[i]);
}

var childElements = document.querySelector(".oferts").querySelectorAll('div, h2, p');
for(var i = 0; i < childElements.length; i++){
    console.log(childElements[i]);
}

console.log(homeElement.tagName,homeElement.className);//tag name "HEADER" //class brak
console.log(childElements.tagName,childElements.className);//tag brak //class brak
console.log(banner.tagName,banner.className);//tag name "DIV" //class "ban article"
console.log(blocks.tagName,blocks.className);//tag brak //class brak
console.log(links.tagName,links.className);//tag brak //class brak



