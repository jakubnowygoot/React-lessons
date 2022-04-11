/*
 <span class="tooltipText">Text tooltipa</span>
 */

let toolFirst = document.querySelectorAll(".tooltip")[0];
let toolSecond = document.querySelectorAll(".tooltip")[1];
let toolthird = document.querySelectorAll(".tooltip")[2];


toolFirst.addEventListener("mouseover",() => {
let addText = document.createElement("span");
    addText.classList.add("tooltipText");
    addText.innerText = "Text tooltipa";
    toolFirst.appendChild(addText);
});

toolFirst.addEventListener("mouseout",() =>{
    let deleteTool = document.querySelector(".tooltipText");
   deleteTool.remove();
});

toolSecond.addEventListener("mouseover",() => {
    let addText = document.createElement("span");
    addText.classList.add("tooltipText");
    addText.innerText = "Text tooltipa";
    toolSecond.appendChild(addText);
});

toolSecond.addEventListener("mouseout",() =>{
    let deleteTool = document.querySelector(".tooltipText");
    deleteTool.remove();
});

toolthird.addEventListener("mouseover",() => {
    let addText = document.createElement("span");
    addText.classList.add("tooltipText");
    addText.innerText = "Text tooltipa";
    toolthird.appendChild(addText);
});

toolthird.addEventListener("mouseout",() => {
    let deleteTool = document.querySelector(".tooltipText");
    deleteTool.remove();
});


