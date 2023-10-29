const diamond = require('./give-me-a-diamond');

describe('diamond', () => {
  it('should return hello', () => {
    expect(diamond()).toBe('hello');
  });
});
