let grade = 6;
switch(grade) {
    case 6: {
        console.log("celujący");
        break;
    }
    case 5: {
        console.log("bardzo dobry");
        break;
    }
    case 4:  {
        console.log("dobry");
        break;
    }
    case 3: {
        console.log("dostateczny")
        break;
    }
    case 2: {
        console.log("dopuszczający")
        break;
    }
    case 1: {
        console.log("niedostateczny")
        break;
    }
    default: {
        console.log("System oceniania nie obejmuje tej oceny :)")
        break;
    }

}

// przy grade = 6 jest celujacy
// 5 = bardzo dobry
// 4 = dobry
// 3 = dostateczny
// 2 = dopuszczalny
// 1 = niedostateczny