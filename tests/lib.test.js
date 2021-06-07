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