document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector("#menu");
    let paragraf = document.querySelector("p");
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

//Po wlaczeniu nie ma error dopiero po przeniesieniu do sekcji head pojawia sie error Uncaught TypeError: Cannot read properties of null (reading 'classList')
//     at HTMLDocument.<anonymous> (zadanie01.js:8:10)
//Po przeniesieniu kodu do eventu problem zniknal
//Po przeniesieuniu script problem sie nie pojawil ponownie