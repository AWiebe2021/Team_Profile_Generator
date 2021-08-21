const Employee = require('../lib/Employee.js');
class Intern extends Employee {
  constructor(name, intSchool, role) {
    super(name);
    this.intSchool = '';
    this.role = 'Intern'
 }

 getSchool() {
   return this.intSchool;
 }
 getRole() {
   return this.role;
 }
}

module.exports = Intern;