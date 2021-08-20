const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, officeNumber) {
    super(name);

    this.school = '';
 }

 getSchool() {
   return school;
 }
 getRole() {
   return `Intern`;
 }
}

module.exports = Intern;