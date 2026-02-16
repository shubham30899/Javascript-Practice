// follow Open for Extension and Closed for Modification Principle
// Encapsulates each one in its own class
// Do not use this
// class Vehicle {
//   constructor(type) {
//     this.type = type;
//   }

//   drive() {
//     if (this.type === 'normal') {
//       console.log('🚗 Driving normally');
//     } else if (this.type === 'sport') {
//       console.log('🏎️ Driving fast and sporty');
//     } else if (this.type === 'offroad') {
//       console.log('🚙 Driving off-road');
//     }
//   }
// }

class NormalDriving{
    drive(){
        console.log("Drive Normally!")
    }
}
class SportDriving{
    drive(){
        console.log("Sport Driving!")
    }
}

class OffRoadDriving{
    drive(){
        console.log("Off Road Driving!")
    }
}

class Vehicle{
    constructor(drivingStrategy){
        this.drivingStrategy = drivingStrategy;
    }

    drive(){
        this.drivingStrategy.drive();
    }
}

const car = new Vehicle(new NormalDriving);
car.drive();

const bus = new Vehicle(new NormalDriving);
bus.drive();

const thar = new Vehicle(new OffRoadDriving);
thar.drive();

const ferrari = new Vehicle(new SportDriving);
ferrari.drive();