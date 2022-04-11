function random(color) {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
};
let btn1s = document.querySelectorAll(".button");
btn1s.forEach(element => {
    element.addEventListener("click",function (eve){
        this.parentElement.style.backgroundColor = random();
    });
});