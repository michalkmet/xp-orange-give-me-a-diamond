const diamond = require('./give-me-a-diamond');

describe('Story1: negative + small numbers', () => {
  it('UAT1.1: When I pass -1, then I should see null', () => {
    expect(diamond(-1)).toBe(null);
  });
  it('UAT1.2: When I pass 0, then I should see null', () => {
    expect(diamond(0)).toBe(null);
  });
  it('UAT1.3: When I pass 1, then I should see *', () => {
    expect(diamond(1)).toBe('*');
  });
  it('UAT1.4: When I pass 2, then I should see null', () => {
    expect(diamond(2)).toBe(null);
  });
});
