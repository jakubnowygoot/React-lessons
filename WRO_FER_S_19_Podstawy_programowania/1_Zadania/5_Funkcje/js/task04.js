function rockPaperScissors(player1, player2) {
    if (player1 == "kamień" && player2 =="nożyczki"){
        console.log("Gracz 1 wygrał")

    }else if (player1 == "kamień" && player2 == "papier"){
        console.log("Gracz 2 wygrał")

    }else if (player1 == "kamień" && player2 == "kamień"){
        console.log("Remis")

    }else if (player1 == "nożyczki" && player2 == "kamień"){
        console.log("Gracz 2 wygrał")

    }else if (player1 == "nożyczki" && player2 == "papier"){
        console.log("Gracz 1 wygrał")

    }else if (player1 == "nożyczki" && player2 == "nożyczki"){
        console.log("Remis")

    }else if (player1 == "papier" && player2 == "papier"){
        console.log("Remis")

    }else if (player1 == "papier" && player2 == "kamień"){
        console.log("Gracz 1 wygrał")

    }else if (player1 == "papier" && player2 == "nożyczki"){
        console.log("Gracz 2 wygrał")

    }else console.log("Błędne informacje")

}
console.log(rockPaperScissors("kamień", "nożyczki"))


//wynik Gracz 1 wygrał
