const { fizzbuzz } = require("../fizzbuzz");

describe("FizzBuzz", () => {
  it("should throw if input is not a number", () => {
    expect(() => {
      fizzbuzz("a");
      fizzbuzz(null);
      fizzbuzz(undefined);
      fizzbuzz({});
    }).toThrow();
  });

  it("should return FizzBuzz if number divisible by 3 and 5", () => {
    const res = fizzbuzz(15);
    expect(res).toBe("FizzBuzz");
  });

  it("should return Fizz if number divisible by only 3", () => {
    const res = fizzbuzz(12);
    expect(res).toBe("Fizz");
  });

  it("should return Buzz if number divisible by only 5", () => {
    const res = fizzbuzz(10);
    expect(res).toBe("Buzz");
  });

  it("should return input if number is not divisible by neither 5 nor 3", () => {
    const res = fizzbuzz(8);
    expect(res).toBe(8);
  });
});
