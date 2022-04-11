function printMousePos(event) {
    document.getElementById("globalX").textContent = event.clientX;
    document.getElementById("globalY").textContent = event.clientY;
};
document.addEventListener("mousemove", printMousePos);
document.getElementById('box').onmousemove = function clickEvent(e) {
    let rect = e.target.getBoundingClientRect();
    document.getElementById("localX").textContent = e.clientX - rect.left;
    document.getElementById("localY").textContent = e.clientY - rect.top;
}