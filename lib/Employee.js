class Employee {
    constructor(name = '') {
      this.name = name;
      this.id = '';
      this.email = '';
      this.role = '';
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