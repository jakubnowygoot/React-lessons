function rentCost(days) {
    if (days == 1) {
        console.log("Koszt pokoju 200zł/dzień");
    }
    else if (days >= 2 && days <= 3) {
        console.log("Koszt pokoju 180zł/dzień");
    }
    else if (days >=4 && days <= 7) {
        console.log("Koszt pokoju 160zł/dzień");
    }
    else if (days >=8) {
        console.log("Koszt pokoju 150zł/dzień");
    }

}
rentCost(10);