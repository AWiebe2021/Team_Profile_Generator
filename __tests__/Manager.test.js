const Manager = require('../lib/Manager.js');
test('creates a Manager object', () => {
    const manager = new Manager('name');
    expect(manager.officeNum).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
  });