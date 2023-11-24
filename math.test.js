const { add, substract, divide, multiply } = require('./math')

describe("Math.js tests", () => {
  it("Should test add", () => {
    expect(add(2, 2)).toBe(4)
  })
  it("Should test substract", () => {
    expect(substract(2, 2)).toBe(0)
  })
  it("Should test multiply", () => {
    expect(multiply(2, 2)).toBe(3)
  })
  it("Should test divide", () => {
    expect(divide(2, 2)).toBe(1)
  })
})