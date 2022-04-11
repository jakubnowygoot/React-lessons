let myButton = document.querySelector("#add");
let myList = document.querySelector(".menu");
let newLi = document.createElement("li");
myButton.addEventListener("click",function (event){
    myList.appendChild(newLi);
    document.querySelector("li").innerText = "Element 1 - w chwili dodania było 0 elementów";
});