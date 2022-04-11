let tryThisOne = document.querySelectorAll(".listContainer");
tryThisOne.forEach(elem => {
    elem.addEventListener("mousemove",function (e){
        this.firstElementChild.firstElementChild.style.backgroundColor = "red";
        this.firstElementChild.lastElementChild.style.backgroundColor = "blue";
        this.firstElementChild.children[2].style.backgroundColor = "green";
        this.firstElementChild.children[1].style.backgroundColor = "green";
        this.firstElementChild.children[3].style.backgroundColor = "green";
    });
    elem.addEventListener("mouseout",function (e){
        this.firstElementChild.firstElementChild.style.backgroundColor = "white";
        this.firstElementChild.lastElementChild.style.backgroundColor = "white";
        this.firstElementChild.children[2].style.backgroundColor = "white";
        this.firstElementChild.children[1].style.backgroundColor = "white";
        this.firstElementChild.children[3].style.backgroundColor = "white";
    });
});