function totalIt() {
        let showZl = "zł";
        let input = document.getElementsByName("add");
        let total = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked) {
                total += parseFloat(input[i].getAttribute("data-price"));
            }
        }
        document.getElementById("price").innerText =  total.toFixed(2) + showZl;
}
function toggle(source) {
    let checkAll = document.getElementById("checkAll")
    let checkboxes = document.getElementsByName("add");
    for(let i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
        document.getElementById("price").innerText = "18.30zł";
    }
        if (checkAll.checked === false){
            document.getElementById("price").innerText = "0zł";
        }
}
function deleteALl(source) {
    let checkboxes = document.getElementsByName("add");
    if (source.checked) {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type === 'checkbox') {
                checkboxes[i].checked = false;
                document.getElementById("checkAll").checked = false;
                document.getElementById("price").innerText = "0zł";
            }
        }
    }
}
let getButton = document.querySelector(".btn-primary");
let priceView = document.getElementById("price");
getButton.addEventListener("click",function (event){
    alert("Do zapłaty:"+priceView.innerText);
});