const lib = require("../lib");

describe("absolute", () => {
  it("should return a +ve num if input is +ve", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a +ve num if input is -ve", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 num if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("shoud return a greeting", () => {
    const result = lib.greet("Manav");
    expect(result).toMatch(/Manav/);
    expect(result).toContain("Manav");
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const res = lib.getCurrencies();

    // Too general
    // expect(res).toBeDefined();
    // expect(res).not.toBeNull();

    // Too specific
    // expect(res[0]).toBe('USD');
    // expect(res[1]).toBe('AUD');
    // expect(res[2]).toBe('EUR');
    // expect(res.length).toBe(3)

    // Proper way
    expect(res).toContain("USD");
    expect(res).toContain("AUD");
    expect(res).toContain("EUR");

    // Ideal way
    expect(res).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});
