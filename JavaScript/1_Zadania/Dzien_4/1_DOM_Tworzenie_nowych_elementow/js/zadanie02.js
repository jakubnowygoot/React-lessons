let myClick = document.querySelector("#add");
let numberOrder = document.querySelector("#orderId");
let item = document.querySelector("#item");
let numbersOfItems = document.querySelector("#quantity");
let orders = document.querySelector("tbody");
myClick.addEventListener("click",function (event){
    let newTr = document.createElement("tr");
    orders.appendChild(newTr);
    let newTd = document.createElement("td");
    newTr.appendChild(newTd);
    let newTd2 = document.createElement("td");
    newTr.appendChild(newTd2);
    let newTd3 = document.createElement("td");
    newTr.appendChild(newTd3);
    newTd.innerText = numberOrder.value;
    newTd2.innerText = item.value;
    newTd3.innerText = numbersOfItems.value;
});