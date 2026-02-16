class ParkingSpot{
    constructor(id,price){
        this.id = id;
        this.price = price;
        this.isempty = true;
        this.vehicle = null;
    }


    park(vehicle){
        if(!this.isempty){
            return false
        }
        this.isempty = false;
        this.vehicle = vehicle;

        return true
    }

    unpark(){
        const vehicle = this.vehicle
        this.isempty = true;
        this.vehicle = null;
        return vehicle
    }


    getVehicle(){
        return this.vehicle;
    }

    getId(){
        return this.id
    }

    isAvailable(){
        return this.isempty
    }
}

module.exports = ParkingSpot;
