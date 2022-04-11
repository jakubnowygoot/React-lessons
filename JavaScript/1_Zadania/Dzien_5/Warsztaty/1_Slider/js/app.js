let buttonNext = document.getElementById("nextPicture");
let buttonPrev = document.getElementById("prevPicture");
let allLi = document.querySelectorAll("li");
let sliderArray = [];

allLi.forEach(eleLi =>{
    sliderArray.push(eleLi)
});

let visibleIndex = 0;
sliderArray[visibleIndex].classList.add("visible")

buttonNext.addEventListener("click",() => {
    sliderArray.forEach(elem =>{
        elem.classList.remove("visible")
    })
    if (visibleIndex === sliderArray.length -1){
        visibleIndex = 0
    }else{
        visibleIndex++
    }
    sliderArray[visibleIndex].classList.add("visible")
});

buttonPrev.addEventListener("click",function (eve){
    sliderArray.forEach(elem =>{
        elem.classList.remove("visible")
    })
    if (visibleIndex === 0){
        visibleIndex = sliderArray.length -1
    }else{
        visibleIndex--
    }
    sliderArray[visibleIndex].classList.add("visible")
});