let clearApple = document.querySelector('img[alt="Apple"]');
let ubuntu = document.querySelector('img[alt="Ubuntu"]');
let windows = document.querySelector('img[alt="Windows"]');
let buttonPress = document.querySelector(".btn-primary");
let tryThis = document.querySelector(".form-control");
clearApple.style.display = "none";
ubuntu.style.display = "none";
windows.style.display = "none";
function changeSystem(){
    let result = tryThis.options[tryThis.selectedIndex].value;
    if (result == 1){
        windows.style.display = "block";
        clearApple.style.display = "none";
        ubuntu.style.display = "none";
    }else if (result == 2){
        clearApple.style.display = "block";
        ubuntu.style.display = "none";
        windows.style.display = "none";
    }else if(result == 3){
        clearApple.style.display = "none";
        ubuntu.style.display = "block";
        windows.style.display = "none";
    }
}
buttonPress.addEventListener("click",function (event){
    changeSystem();
});
