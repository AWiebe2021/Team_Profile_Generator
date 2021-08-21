const Engineer = require('../lib/Engineer.js');
test('creates a engineer object', () => {
    const engineer = new Engineer('name');
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
  });