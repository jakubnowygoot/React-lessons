function getId(element) {
     let superFooterid =   document.getElementsByClassName(element)[0].id;
        console.log('element id = ' + superFooterid);
    }
console.log(getId (['superFooter']));