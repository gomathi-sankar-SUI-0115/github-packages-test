import { add, subtract } from '.';

describe('index', () => {
  it('should add 2 and 1 return 3', () => {
    expect(add(2, 1)).toBe(3);
  });
  it('should subtract 2 and 1 return 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });
});
