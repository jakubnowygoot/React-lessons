//1
let thirdkid = document.querySelector(".first");
let firstChild2 = thirdkid.firstElementChild;
let firstChild3 = firstChild2.lastElementChild;
console.log(firstChild3);
//2
let nextChild = document.querySelector("#second");
let nextChild2 = nextChild.parentElement;
let nextChild3 = nextChild2.children;
let nextChild4 = nextChild3[nextChild3.length - 2];
console.log(nextChild4);
//3
let nextTask = document.querySelector("[data-ex]");
let newTask = nextTask.parentElement;
let grandpa = newTask.parentElement;
let grandpaLastChild = grandpa.lastElementChild;
let firstChild1 = grandpaLastChild.firstElementChild;
let results = firstChild1.querySelector("li:nth-child(3)");
console.log(results);
//4
let forthChild = document.querySelector(".forth");
let secondChild = forthChild.parentElement;
let secondChild2 = secondChild.querySelector("article");
let results3 = secondChild2.querySelector("p:nth-child(4)");
console.log(results3);