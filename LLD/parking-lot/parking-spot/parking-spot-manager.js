class ParkingSpaceManager {
  constructor(spots) {
    this.spots = spots;
  }

  addSpace(spot) {
    this.spots.push(spot)
  }

  removeSpace(spotId) {
    this.spots.push(spot)
    const finalSpots = this.spots.filter(item => item.getId() != spotId)
    this.spots = [...finalSpots]
  }

  findAvailableSpot() {
    return this.spots.find(spot => spot.isAvailable());
  }

  park(vehicle) {
    const spot = this.findAvailableSpot();
    if (!spot) return false;
    spot.park(vehicle);
    return spot;
  }

  unpark(spotId) {
    const spot = this.spots.find(s => s.getId() === spotId);
    if (!spot || spot.isAvailable()) return null;
    return spot.unpark();
  }
}


class TwoWheelerSpaceManager extends ParkingSpaceManager {
  constructor(spots = []) {
    console.log("two wheeler", spots);

    super(spots);
  }

}

class FourWheelerSpaceManager extends ParkingSpaceManager {
  constructor(spots = []) {
    console.log("four wheeler", spots);

    super(spots);
  }
}


module.exports = {
  TwoWheelerSpaceManager,
  FourWheelerSpaceManager
};