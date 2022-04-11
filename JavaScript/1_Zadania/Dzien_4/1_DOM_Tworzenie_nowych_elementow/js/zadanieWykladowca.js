let deleteButton = document.querySelectorAll(".deleteBtn");
deleteButton.forEach(elem =>{
    elem.addEventListener("click",function (ev){
      this.parentElement.parentElement.remove(this);
    });
});