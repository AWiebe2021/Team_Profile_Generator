const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, officeNumber) {
    super(name);

    this.github = '';
 }

 getGithub() {
   return github;
 }
 getRole() {
   return `Engineer`;
 }
}

module.exports = Engineer;