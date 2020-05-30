const Friend = require('./Friend');

test('findFriend(["Ryan", "Kieran", "Mark"])은 ["Ryan", "Mark"]를 반환함', () => {
    expect(Friend.findFriend(["Ryan", "Kieran", "Mark"])).toStrictEqual(["Ryan", "Mark"]);
});