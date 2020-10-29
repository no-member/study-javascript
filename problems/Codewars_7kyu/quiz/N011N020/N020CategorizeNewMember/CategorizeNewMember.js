class CategorizeNewMember {
  static membershipCheck(data) {
    const [years, handicap] = data;
    return (years > 54 && handicap > 7) ? 'Senior' : 'Open';
  }

  static openOrSenior(data) {
    return data.map(this.membershipCheck);
  }
}

module.exports = CategorizeNewMember;
