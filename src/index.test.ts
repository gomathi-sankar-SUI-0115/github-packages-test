import { add, subtract } from '.';

describe('index', () => {
  it('should return 3', () => {
    expect(add(2, 1)).toBe(3);
  });
  it('should return 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });
});
