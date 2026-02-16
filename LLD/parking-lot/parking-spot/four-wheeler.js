const ParkingSpot = require('./parking-spot')

class FourWheeler extends ParkingSpot{
    constructor(id,price){
        super(id ,price);
    }

    getPrice(){
        return this.price;
    }
}

module.exports = FourWheeler;