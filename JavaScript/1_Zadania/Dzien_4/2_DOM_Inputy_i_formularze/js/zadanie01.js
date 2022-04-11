let fakturaShow = document.getElementById("invoiceData");
let checkBox = document.querySelector("#invoice");
fakturaShow.style.display = "none";
checkBox.addEventListener('change', function(e) {
    if (e.currentTarget.checked) {
        fakturaShow.style.display = "block";
    }else{
        fakturaShow.style.display = "none";
    }
});