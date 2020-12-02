class Friend {
  static findFriend(friends) {
    return friends.filter((friendName) => friendName.length === 4);
  }
}

module.exports = Friend;
