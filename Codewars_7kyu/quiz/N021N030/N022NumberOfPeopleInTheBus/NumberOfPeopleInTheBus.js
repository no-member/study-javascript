class NumberOfPeopleInTheBus {
    static countPassenger(passenger) {
        return this.countPassengerOneBusStop(passenger[0]);
    }

    static countPassengerOneBusStop(passenger) {
        return passenger[0] - passenger[1];
    }
}

module.exports = NumberOfPeopleInTheBus;
