import remap from '.'

describe('percentage examples', () => {

  test('0.5 is 50%', () => {
    const value = 0.5;
    const result = remap(value, 0, 1, 0, 100);
    expect(result).toBe(50);
  })

})