class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get address() {
    return this._address;
  }

  get birthYear() {
    return this._birthYear;
  }

  set birthYear(year) {
    this._birthYear = year;
  }

  set address(addr) {
    this._address = addr;
  }

  toString() {
    return `Person(${this._firstname}, ${this._lastname})`;
  }

  peopleInSameCountry(friends) {
    let result = [];
    for (let friend in friends) {
      if(this.address.country === friend.address.country) {
        result.push(friend);
      }
    }
    return result;
  }
}

class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }

  studentsInSameCountryAndSchool(friends) {
    const closeFriends = super.peopleInSameCountry(friends);
    let result = [];

    for (let closeFriend in closeFriends) {
      if(this.school === closeFriend.school) {
        result.push(closeFriend);
      }
    }

    return result;
  }
}
