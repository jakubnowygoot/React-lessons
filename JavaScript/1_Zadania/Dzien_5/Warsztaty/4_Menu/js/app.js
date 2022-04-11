let newArray = []
let elements = document.querySelectorAll(".nav > ul > li")

elements.forEach(elem =>{
    newArray.push(elem)
});

newArray[0].addEventListener("mouseover",() => {
    if (newArray[0].childElementCount === 1){
        newArray[0].firstElementChild.style.display = "block";
    }
});

newArray[0].addEventListener("mouseout",() => {
    if (newArray[0].childElementCount === 1){
        newArray[0].firstElementChild.style.display = "none";
    }
});

newArray[1].addEventListener("mouseover",() => {
    if (newArray[1].childElementCount === 1){
        newArray[1].firstElementChild.style.display = "block";
    }
});

newArray[1].addEventListener("mouseout",() => {
    if (newArray[1].childElementCount === 1){
        newArray[1].firstElementChild.style.display = "none";
    }
});

newArray[2].addEventListener("mouseover",() => {
    if (newArray[2].childElementCount === 1){
        newArray[2].firstElementChild.style.display = "block";
    }
});

newArray[2].addEventListener("mouseout",() => {
    if (newArray[2].childElementCount === 1){
        newArray[2].firstElementChild.style.display = "none";
    }
});

newArray[3].addEventListener("mouseover",() => {
    if (newArray[3].childElementCount === 1){
        newArray[3].firstElementChild.style.display = "block";
    }
});

newArray[3].addEventListener("mouseout",() => {
    if (newArray[3].childElementCount === 1){
        newArray[3].firstElementChild.style.display = "none";
    }
});