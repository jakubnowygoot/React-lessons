let deleteButton = document.querySelector("#remove");
deleteButton.addEventListener("click",function (e){
    deleteButton.parentElement.removeChild(deleteButton);
});