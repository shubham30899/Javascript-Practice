class Ticket {
    constructor(ticketNumber, vehicle, spot) {
        this.ticketNumber = ticketNumber;
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = new Date(); // Auto-generated on creation
        this.exitTime = null;
    }

    closeTicket() {
        this.exitTime = new Date();
    }

}

module.exports = Ticket