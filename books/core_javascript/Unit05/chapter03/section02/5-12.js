const createCar = function () {
    let fuel = Math.ceil(Math.random() * 10 + 10);
    const power = Math.ceil(Math.random() * 3 + 2);
    let moved = 0;

    const publicMembers = {
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
    };

    Object.freeze(publicMembers);
    return publicMembers;
}