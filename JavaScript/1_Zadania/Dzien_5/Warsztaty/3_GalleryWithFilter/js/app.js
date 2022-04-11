let hideButton = document.getElementById("hideButton");
let showButton = document.getElementById("showButton");
let getTag = document.getElementById("tagInput");
let allImg = document.querySelectorAll("img");

hideButton.addEventListener("click",() => {
    let saveWord = getTag.value;
    getTag.value = '';
    allImg.forEach( img => {
        if (img.dataset.tag.indexOf(saveWord) !== -1){
            img.classList.add("invisible")
        }else{
            img.classList.remove("invisible")
        }
    });
});

showButton.addEventListener("click",() => {
    let saveWord = getTag.value;
    getTag.value = '';
    allImg.forEach( img => {
        if (img.dataset.tag.indexOf(saveWord) !== -1){
            img.classList.remove("invisible")
        }else{
            img.classList.add("invisible")
        }
    });
});