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

describe('Story2: number 3+', () => {
  it('UAT2.1: When I pass 3, then I should see " *\n***\n *\n"', () => {
    expect(diamond(3)).toBe(' *\n***\n *\n');
  });
  it('UAT2.2: When I pass 4, then I should see null', () => {
    expect(diamond(4)).toBe(null);
  });
  it.only('UAT2.3: When I pass 5, then I should see "  *\n ***\n*****\n ***\n  *\n"', () => {
    expect(diamond(5)).toBe('  *\n ***\n*****\n ***\n  *\n');
  });
});
