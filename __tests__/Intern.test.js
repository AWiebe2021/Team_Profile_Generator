const Intern = require('../lib/Intern.js');
test('creates a Intern object', () => {
    const intern = new Intern('name');
    expect(intern.intSchool).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
  });