class UserManager {
  constructor() {
    this.riders = new Map();
    this.drivers = new Map();
    this.riderIdCounter = 1;
    this.driverIdCounter = 1;
  }

  registerRider(name) {
    const id = this.riderIdCounter++;
    this.riders.set(id, { id, name, history: [] });
    console.log(`Rider Registered: ID=${id}, Name=${name}`);
  }

  registerDriver(name, vehicle) {
    const id = this.driverIdCounter++;
    this.drivers.set(id, { id, name, vehicle, history: [] });
    console.log(`Driver Registered: ID=${id}, Name=${name}, Vehicle=${vehicle}`);
  }
}

class RideManager {
  constructor(userManager) {
    this.userManager = userManager;
    this.rides = new Map();
    this.rideIdCounter = 1;
    this.FARE = 50;
  }

  requestRide(riderId, pickup, drop) {
    if (!this.userManager.riders.has(riderId)) {
      console.log(`Error: Rider ${riderId} not found`);
      return;
    }
    const id = this.rideIdCounter++;
    const ride = { id, riderId, driverId: null, pickup, drop, status: "REQUESTED" };
    this.rides.set(id, ride);
    console.log(`Ride Requested: RideID=${id}, RiderID=${riderId}, From=${pickup}, To=${drop}`);
  }

  acceptRide(driverId, rideId) {
    if (!this.userManager.drivers.has(driverId)) {
      console.log(`Error: Driver ${driverId} not found`);
      return;
    }
    const ride = this.rides.get(rideId);
    if (!ride) {
      console.log(`Error: Ride ${rideId} not found`);
      return;
    }
    if (ride.status !== "REQUESTED") {
      console.log(`Error: Ride ${rideId} not available for acceptance`);
      return;
    }
    ride.driverId = driverId;
    ride.status = "ACCEPTED";
    console.log(`Ride Accepted: RideID=${rideId}, DriverID=${driverId}`);
  }

  startRide(rideId) {
    const ride = this.rides.get(rideId);
    if (!ride) {
      console.log(`Error: Ride ${rideId} not found`);
      return;
    }
    if (ride.status !== "ACCEPTED") {
      console.log(`Error: Ride ${rideId} cannot be started`);
      return;
    }
    ride.status = "ONGOING";
    console.log(`Ride Started: RideID=${rideId}`);
  }

  completeRide(rideId) {
    const ride = this.rides.get(rideId);
    if (!ride) {
      console.log(`Error: Ride ${rideId} not found`);
      return;
    }
    if (ride.status !== "ONGOING") {
      console.log(`Error: Ride ${rideId} cannot be completed`);
      return;
    }
    ride.status = "COMPLETED";

    const rider = this.userManager.riders.get(ride.riderId);
    const driver = this.userManager.drivers.get(ride.driverId);
    rider.history.push(ride);
    driver.history.push(ride);

    console.log(`Ride Completed: RideID=${rideId}, Fare=${this.FARE}`);
  }

  cancelRide(rideId) {
    const ride = this.rides.get(rideId);
    if (!ride) {
      console.log(`Error: Ride ${rideId} not found`);
      return;
    }
    if (!["REQUESTED", "ACCEPTED"].includes(ride.status)) {
      console.log(`Error: Ride ${rideId} cannot be cancelled`);
      return;
    }
    ride.status = "CANCELLED";
    console.log(`Ride Cancelled: RideID=${rideId}`);
  }

  tripHistory(type, id) {
    if (type === "rider") {
      const rider = this.userManager.riders.get(id);
      if (!rider) {
        console.log(`Error: Rider ${id} not found`);
        return;
      }
      console.log(`Trip History for Rider ${id}:`, rider.history);
    } else if (type === "driver") {
      const driver = this.userManager.drivers.get(id);
      if (!driver) {
        console.log(`Error: Driver ${id} not found`);
        return;
      }
      console.log(`Trip History for Driver ${id}:`, driver.history);
    } else {
      console.log("Error: Invalid user type");
    }
  }
}

// ------------------ Command Parser ------------------

class RideSharingApp {
  constructor() {
    this.userManager = new UserManager();
    this.rideManager = new RideManager(this.userManager);
  }

  execute(command) {
    const parts = command.split(" ");
    console.log(parts);
    
    const action = parts[0];

    switch (action) {
      case "register_rider":
        this.userManager.registerRider(parts[1]);
        break;
      case "register_driver":
        this.userManager.registerDriver(parts[1], parts[2]);
        break;
      case "request_ride":
        this.rideManager.requestRide(+parts[1], parts[2], parts[3]);
        break;
      case "accept_ride":
        this.rideManager.acceptRide(+parts[1], +parts[2]);
        break;
      case "start_ride":
        this.rideManager.startRide(+parts[1]);
        break;
      case "complete_ride":
        this.rideManager.completeRide(+parts[1]);
        break;
      case "cancel_ride":
        this.rideManager.cancelRide(+parts[1]);
        break;
      case "trip_history":
        this.rideManager.tripHistory(parts[1], +parts[2]);
        break;
      default:
        console.log("Error: Invalid command");
    }
  }
}

// ------------------ Example Usage ------------------

const app = new RideSharingApp();

app.execute("register_rider Alice");
app.execute("register_driver Bob Car-MH12AB1234");
app.execute("request_ride 1 Pune_Station Pune_Airport");
app.execute("accept_ride 1 1");
app.execute("start_ride 1");
app.execute("complete_ride 1");
app.execute("trip_history rider 1");
app.execute("trip_history driver 1");
