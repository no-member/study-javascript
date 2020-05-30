const Friend = require('./Friend');

test('findFriend(["Ryan", "Kieran", "Mark"])은 ["Ryan", "Mark"]를 반환함', () => {
    expect(Friend.findFriend(["Ryan", "Kieran", "Mark"])).toStrictEqual(["Ryan", "Mark"]);
});

test('findFriend(["Ryan", "Jimmy", "123", "4", "Cool Man"])은 ["Ryan"]를 반환함', () => {
    expect(Friend.findFriend(["Ryan", "Jimmy", "123", "4", "Cool Man"])).toStrictEqual(["Ryan"]);
});

test('findFriend(["Love", "Your", "Face", "1"])은 ["Love", "Your", "Face"]를 반환함', () => {
    expect(Friend.findFriend(["Love", "Your", "Face", "1"])).toStrictEqual(["Love", "Your", "Face"]);
});
