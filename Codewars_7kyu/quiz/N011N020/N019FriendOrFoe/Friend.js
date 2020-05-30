class Friend {
    static findFriend(friends) {
        return friends.filter(x => x.length === 4)
    }
}

module.exports = Friend;
