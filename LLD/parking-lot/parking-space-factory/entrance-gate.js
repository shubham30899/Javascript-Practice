const Ticket = require('../ticket');

class EntranceGate {
  constructor(gateId, parkingSpaceFactory) {
    this.gateId = gateId;
    this.parkingSpaceFactory = parkingSpaceFactory;
    this.ticketNumber = 1;
  }

  generateTicketNumber() {
    return `T-${this.gateId}-${Date.now()}-${this.ticketNumber++}`;
  }


  allowEntry(vehicle) {
    const manager = this.parkingSpaceFactory.getManager(vehicle.vehicleType);
    const spot = manager.park(vehicle);

    console.log("spot",spot);
    

    if (!spot) {
      console.log(`No available spot for ${vehicle.type}`);
      return null;
    }

    const ticket = new Ticket(this.generateTicketNumber(), vehicle, spot);
    console.log(`Ticket issued: ${ticket.ticketNumber}`);
    return ticket;
  }
}

module.exports = EntranceGate;
