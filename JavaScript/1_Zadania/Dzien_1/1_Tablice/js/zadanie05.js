function getEvenAvarage(array) {
   let thisAverage=0;
    let oddlength=0;
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2==0){
            thisAverage+=array[i];
            oddlength++;
        }
    }
    thisAverage=(thisAverage/oddlength);
    console.log(thisAverage);
}
console.log(getEvenAvarage([1,1,1,1]));
console.log(getEvenAvarage([1,2,3,4,5,6,7]));
console.log(getEvenAvarage([2,8,3,7,4]));