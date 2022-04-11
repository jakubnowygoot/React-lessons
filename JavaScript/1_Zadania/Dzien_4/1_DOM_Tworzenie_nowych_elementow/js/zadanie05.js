let list1 = document.getElementById("list1");
let linksFromList1 = document.querySelectorAll("#list1 .moveBtn");
let list2 = document.getElementById("list2");
let linksFromList2 = document.querySelectorAll("#list2 .moveBtn");
linksFromList1.forEach(function (link){
    link.addEventListener("click",function (eve){
        let cloned = this.parentElement.cloneNode(true);
        list2.appendChild(cloned);
        this.parentElement.parentElement.removeChild(this.parentElement);
    });
});
linksFromList2.forEach(function (link){
    link.addEventListener("click",function (eve){
        let cloned = this.parentElement.cloneNode(true);
        list1.appendChild(cloned);
        this.parentElement.parentElement.removeChild(this.parentElement);
    });
});