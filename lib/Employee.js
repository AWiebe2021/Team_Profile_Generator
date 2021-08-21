class Employee {
    constructor(name = '') {
      this.name = name;
      this.id = 123;
      this.email = 'awiebe@company.com';
      this.role = 'Employee';
      this.avatar = '';
    }
  
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
      }
   }
  
  module.exports = Employee;