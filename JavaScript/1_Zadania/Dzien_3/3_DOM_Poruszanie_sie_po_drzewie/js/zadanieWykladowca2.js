let firstClick = "true";
let letsTry = document.querySelectorAll(".button");
letsTry.forEach(element => {
    element.addEventListener("click",function (eve){
        if (firstClick){
            firstClick = false;
            this.nextElementSibling.style.display = "none"
        }else{
            firstClick = true;
            this.nextElementSibling.style.display = "block"
        }
    });
});
//maly problem poniewaz dziala dopiero po 2 kliknieciu