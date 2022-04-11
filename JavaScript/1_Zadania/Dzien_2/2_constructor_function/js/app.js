class Basket {
    constructor() {
        this.products = {};
        this.sums = 0;
    }
    addProduct(name,price){
        this.products = this.products+ " " + name;
        this.sums = this.sums + price;
    }
    showBasket(){
        console.log(this.products+","+this.sums+"zł")
    }
};