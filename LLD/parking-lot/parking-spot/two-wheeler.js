const ParkingSpot = require('./parking-spot')

class TwoWheeler extends ParkingSpot{
    constructor(id,price){
        super(id, price);
    }

    getPrice(){
        return this.price;
    }
}

module.exports = TwoWheeler;