class NumberOfPeopleInTheBus {
    static countPassenger(passengers) {
        return passengers.map(p => this.countPassengerOneBusStop(p)).reduce((x, y) => x + y, 0);
    }

    static countPassengerOneBusStop(passengers) {
        return passengers[0] - passengers[1];
    }
}

module.exports = NumberOfPeopleInTheBus;
