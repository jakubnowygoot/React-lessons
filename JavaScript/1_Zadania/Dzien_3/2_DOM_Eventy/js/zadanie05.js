let getButtons = document.querySelectorAll('.box');
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
getButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        this.style.backgroundColor = randomColors()
    });
});