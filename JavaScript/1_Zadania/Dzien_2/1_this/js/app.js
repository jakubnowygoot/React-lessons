let stairs = {
    step: 0,
    up() {
        this.step++
    },
    down() {
        this.step--
    },
    printStep(){
        console.log(stairs.step);
    }
}