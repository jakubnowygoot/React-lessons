let myFirstButton = document.querySelector("article a");
let mySecondButton = document.querySelector("article:nth-child(2) a");
let findContent = document.querySelector(".content");
let findSecondContent = document.querySelector("article:last-child .content");
myFirstButton.addEventListener("click",function (eve){
    findContent.style.display = "block";
});
mySecondButton.addEventListener("mouseover",function (eve){
    findSecondContent.style.display = "block";
});