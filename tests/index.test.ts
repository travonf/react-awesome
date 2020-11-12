describe('测试案例', () => {
  it('断言两个数字不相等', () => {
    expect(1).not.toBe(2);
  });
  it('断言为null', () => {
    expect(null).toBeNull();
  });
  it('断言为undefined', () => {
    expect(undefined).toBeUndefined();
  });
  it('断言不为undefined', () => {
    expect(1).toBeDefined();
  });
  it('断言为true', () => {
    expect(1).toBeTruthy();
  });
  it('断言为false', () => {
    expect(0).toBeFalsy();
  });
  it('断言大于3', () => {
    expect(4).toBeGreaterThan(3);
  });
  it('断言大于等于3.5', () => {
    expect(4).toBeGreaterThanOrEqual(3.5);
  });
  it('断言小于5', () => {
    expect(4).toBeLessThan(5);
  });
  it('断言小于等于4.5', () => {
    expect(4.5).toBeLessThanOrEqual(4.5);
  });
  it('断言浮点数相等', () => {
    expect(4.5).toBeCloseTo(4.5);
  });
  it('断言正则匹配', () => {
    expect('Hello').toMatch(/^Hel{2}o$/);
  });
  it('断言含有元素', () => {
    expect(['Hello', 'World']).toContain('Hello');
  });
  it('断言对象相等', () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });
  it('断言对象长度', () => {
    expect([1, 2, 3]).toHaveLength(3);
  });
});
