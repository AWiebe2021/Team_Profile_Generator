const Employee = require('../lib/Employee.js');
class Manager extends Employee {
  constructor(name, officeNumber, role) {
    super(name);
    this.officeNum = 321;
    this.role = 'Manager'
 }
 
  getOfficeNum() {
    return this.officeNum;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Manager;