const diamond = require('./give-me-a-diamond');

describe('Story1: negative + small numbers', () => {
  it('UAT1.1: When I pass -1, then I should see null', () => {
    expect(diamond(-1)).toBe(null);
  });
});
