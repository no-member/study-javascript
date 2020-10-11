const Person = function(name, gender) {
    this.name = name;
    this.gender = gender;
}

const Student = function(name, gender, school) {
    Person.call(this, name, gender);
    this.school = school;
}

const Employee = function(name, gender, company) {
    Person.call(this, name, gender);
    this.company = company;
}

const by = new Student('보영', 'female', '단국대');
const jn = new Employee('재난', 'male', '구글');

