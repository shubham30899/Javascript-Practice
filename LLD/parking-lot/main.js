const EntranceGate = require('./parking-space-factory/entrance-gate');
const ParkingSpaceFactory = require('./parking-space-factory/parking-space-factory');
const Vehicle = require('./vehicle');
const TwoWheelerSpot = require('./parking-spot/two-wheeler');
const FourWheelerSpot = require('./parking-spot/four-wheeler');

// Setup spot lists
const twoSpots = [new TwoWheelerSpot(1, 10), new TwoWheelerSpot(2, 10)];
const fourSpots = [new FourWheelerSpot(3, 20), new FourWheelerSpot(4, 20)];

// Setup factory
const factory = new ParkingSpaceFactory(twoSpots, fourSpots);

// Setup gate
const gate = new EntranceGate("Gate1", factory);

// Try parking
const car = new Vehicle("MH-01-XYZ1234", "fourWheeler");
const bike = new Vehicle("KA-09-ABC7890", "twoWheeler");

gate.allowEntry(car);
gate.allowEntry(bike);
