const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, officeNumber) {
    super(name);

    this.officeNumber = '';
 }

  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;