let findParent = document.querySelector(".parent");
let findChildren = document.querySelector(".children")
let findParent2 = document.querySelector(".parent:nth-child(2)");
let findChildren2 = document.querySelector(".parent:nth-child(2) .children");
let findParent3 = document.querySelector(".parent:nth-child(3)");
let findChildren3 =document.querySelector(".parent:nth-child(3) .children");
findParent.addEventListener("mousemove", function (event) {
    findChildren.style.display = "block";
});
findParent.addEventListener("mouseleave",function (event) {
    findChildren.style.display = "none";
});
findParent2.addEventListener("mousemove", function (event) {
    findChildren2.style.display = "block";
});
findParent2.addEventListener("mouseleave",function (event) {
    findChildren2.style.display = "none";
});
findParent3.addEventListener("mousemove", function (event) {
    findChildren3.style.display = "block";
});
findParent3.addEventListener("mouseleave",function (event) {
    findChildren3.style.display = "none";
});
//zadanie 2
let parents = document.querySelectorAll(".parent");
parents.forEach(function (parent){
    console.log(parent);
    parent.addEventListener("mouseover",function (){
        let child = this.querySelector(".children")
        child.style.display = "block";
    });
    parent.addEventListener("mouseout",function (){
        hideChildrenElement(this.querySelector(".children"));
    });
});
function hideChildrenElement(elem){
    elem.style.display = "none" ;
};