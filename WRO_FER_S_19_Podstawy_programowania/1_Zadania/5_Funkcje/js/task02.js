function Mynumber (num1, num2, num3) {
   if(num1 > num2 && num1 > num3 ){
       console.log("najwiekszą liczbą jest " + num1)
   } else if (num2 > num1 && num2 > num3 ) {
       console.log("najwieksza liczba jest " + num2)
   }else if (num3 > num1 && num3 > num2){
       console.log("najwieksza liczba jest " + num3)
   }

}

Mynumber(20,32,14);

//najwieksza liczba to 32