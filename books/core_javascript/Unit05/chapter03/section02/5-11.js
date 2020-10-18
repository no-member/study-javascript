const createCar = function () {
    let fuel = Math.ceil(Math.random() * 10 + 10);
    const power = Math.ceil(Math.random() * 3 + 2);
    let moved = 0;
    return {
        get moved() {
            return moved;
        },
        run: function () {
            const km = Math.ceil(Math.random() * 6);
            const wasteFuel = km / power;
            if (fuel < wasteFuel) {
                console.log('이동 불가');
                return;
            }
            fuel -= wasteFuel;
            moved += km;
            console.log(`${km}km 이동 (총 ${moved}km), 남은 연료: ${fuel}`);
        }
    }
}

const car = createCar();
car.run();
console.log(car.moved);
console.log(car.fuel);
console.log(car.power);
console.log();

car.fuel = 1000;
console.log(car.fuel);
car.run();
console.log();

car.power = 100;
console.log(car.power);
car.run();
console.log();

car.moved = 1000;
console.log(car.moved);
car.run();
