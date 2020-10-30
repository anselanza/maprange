import remap from '.'

describe('percentage examples', () => {

  test('0.5 is 50%', () => {
    const value = 0.5;
    const result = remap(value, [0, 1], [0, 100]);
    expect(result).toBe(50);
  })

  test('0.1 is 10%', () => {
    const value = 0.1;
    const result = remap(value, [0, 1], [0, 100]);
    expect(result).toBe(10);
  })

})

describe('typical normalised to pixels conversions', () => {
  test('far left', () => {
    const value = 0;
    expect(remap(value, [0, 1], [0, 1920])).toBe(0)
  })
  test('leftish', () => {
    const value = 0.25;
    expect(remap(value, [0, 1], [0, 1920])).toBe(480)
  })
  test('far right', () => {
    const value = 1.0;
    expect(remap(value, [0, 1], [0, 1920])).toBe(1920)
  })
  test('two values, one with fractions in result', () => {
    const x = 0.5;
    const y = 0.8967;

    const px = remap(0.5, [0,1], [0,1920]);
    const py = remap(0.8967, [0,1], [0,1080]);

    expect(px).toBe(960);
    expect(py).toBe(968.436);
  })
  test('whole numbers only', () => {
    const y = 0.8967;
    expect(remap(y, [0,1], [0,1080], false, true)).toBe(968);
  })
})

describe('negative values', () => {
  test('middle is 0', () => {
    const value = 0.5;
    expect(remap(value, [0, 1], [-1, 1])).toBe(0);
  })
  test('leftish', () => {
    const value = 0.25;
    expect(remap(value, [0, 1], [-1000, 1000])).toBe(-500)
  })
  test('far right', () => {
    const value = 80;
    expect(remap(value, [0, 100], [-100, 100])).toBe(60)
  })
})

describe('clamping', () => {
  test('200% clamped at 100%', () => {
    const value = 2;
    expect(remap(value, [0, 1], [0, 100], true)).toBe(100)
  })
  test('clamp the bottom end', () => {
    const value = -10;
    expect(remap(value, [-1, 1], [-1000, 1000], true)).toBe(-1000)
  })
})
