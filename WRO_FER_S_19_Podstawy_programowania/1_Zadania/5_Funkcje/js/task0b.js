function rentCost(days) {
    if (days == 1) {
        console.log("200zł/dzień");
    }
    else if (days >= 2 && days <= 3) {
        console.log("180zł/dzień");
    }
    else if (days >=4 && days < 7) {
        console.log("160zł/dzień");
    }else if (days == 7){
        console.log("160zl/dzień plus znika -50zl")
    }
    else if (days >=8 && days < 14) {
        console.log("150zł/dzień plus znizka -50 zl ")
    }else if (days == 14){
        console.log("150zl/dzień plus znizka -100 zl")
    } else if (days >=14 && days < 21){
        console.log("150zl/dzień plus znizka -100 zl")
    } else if (days == 21) {
        console.log("150zl/dzień plus znizka -150 zl")
    }else if (days >= 21){
        console.log("150zl/dzień plus znizka -150 zl")
    }
}
rentCost(10);

