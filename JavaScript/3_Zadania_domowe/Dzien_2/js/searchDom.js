//1
function getDataInfo(element){
    let emptyArr = [];
    let getData = document.querySelectorAll("li[data-info]");
    getData.forEach(getData => emptyArr.push(getData.getAttribute('data-info')));
    console.log(emptyArr);
}
getDataInfo();

//2
function getElementClass(element){
    let emptyArrClass = [];
    let book = document.querySelector("#main-contener");
    emptyArrClass.push(book.className);
    console.log(emptyArrClass);
}
getElementClass();
//3
function getElementText(element){
    let getPink = document.querySelector(".pink-color").innerText;
    console.log(getPink);
}
getElementText();
//4
function getElementAlt(element){
    let emptyAlt = [];
    let getDataAlt = document.querySelectorAll('.images');
    getDataAlt.forEach(getDataAlt => emptyAlt.push(getDataAlt.getAttribute('alt')));
    console.log(emptyAlt);
}
getElementAlt();
//5
function getElementHref(element){
    let emptyArr = [];
    let getDataHref = document.querySelectorAll('.my-link');
    getDataHref.forEach(getDataHref => emptyArr.push(getDataHref.getAttribute('href')));
    console.log(emptyArr);
}
getElementHref();
