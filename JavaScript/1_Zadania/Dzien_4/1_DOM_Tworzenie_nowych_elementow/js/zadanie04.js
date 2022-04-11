let deleteButton = document.querySelector("#remove");
deleteButton.addEventListener("click",function (e){
   let myList =  document.querySelectorAll("ul li");
    myList.forEach(element => {
        element.parentElement.removeChild(element);
    });
});