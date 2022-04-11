let heightOutput = document.querySelector('#windowHeight');
let widthOutput = document.querySelector('#windowWidth');
addEventListener("resize",function (event) {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
});
