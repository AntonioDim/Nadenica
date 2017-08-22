var poredenNomer = 1;
Product = function (ime, price, vid, snimka) {
    this.name = ime;
    this.price = price;
    this.vid = vid;
    this.ID = poredenNomer;
    this.photo = snimka
    poredenNomer++
}
var nadenica = new Product("nadenica", 10, "baligo")
var nadenica1 = new Product("nadenica", 10, "baligo")
var nadenica2 = new Product("nadenica", 10, "baligo")

Shop = function (ime) {
    this.name = ime;
    arrayFromProducts = new Array();

    removeById = function () {

    }
    sortBy = function (HowToSort) {
        //default sort po ID, padashto menu po price,name 
    }
    showAllProducs = function (params) {

    }//pechata ime,cena,SNIMKA,vid
    showBYFilter = function () {

    }
    showDetails = function (params) {

    }
}
