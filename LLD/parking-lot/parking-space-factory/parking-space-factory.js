const {TwoWheelerSpaceManager, FourWheelerSpaceManager} = require('../parking-spot/parking-spot-manager')


class ParkingSpaceFactory {
  constructor(twoWheelerSpots = [], fourWheelerSpots = []) {
    this.twoWheelerSpots = twoWheelerSpots;
    this.fourWheelerSpots = fourWheelerSpots;
  }

  getManager(vehicleType) {
    if (vehicleType === 'twoWheeler') {
      return new TwoWheelerSpaceManager(this.twoWheelerSpots);
    } else if (vehicleType === 'fourWheeler') {
      return new FourWheelerSpaceManager(this.fourWheelerSpots);
    } else {
      throw new Error(`Unsupported vehicle type: ${vehicleType}`);
    }
  }
}

module.exports = ParkingSpaceFactory;
