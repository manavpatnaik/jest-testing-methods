const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

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

describe("get product", () => {
  it("should return product with given ID", () => {
    const result = lib.getProduct(1);

    // Will fail - Objects have different memories
    // expect(result).toBe({ id: 1, price: 10 });

    // Correct way
    expect(result).toEqual({ id: 1, price: 10 });

    // Checks if those properties are present in the result
    // with this, we can match only the properties we are interested in
    expect(result).toMatchObject({ id: 1, price: 10 });

    // If we want to check only one property
    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    // Falsy in JS => 0, false, null, undefined, NaN, ''
    const args = [null, undefined, 0, "", NaN, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return a user object if valid username is passed", () => {
    const res = lib.registerUser("manav");
    expect(res).toMatchObject({ username: "manav" });
    expect(res.id).toBeGreaterThan(0);
  });
});

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    // Mocking the db read function
    db.getCustomerSync = function (id) {
      console.log("Fake DB read");
      return { id, points: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
  });
});

describe("notifyCustomer", () => {
  it("should send an email to the customer", () => {
    db.getCustomerSync = function (customerId) {
      return { email: "a" };
    };
    let mailSent = false;
    mail.send = function (message) {
      mailSent = true;
    };
    lib.notifyCustomer({ customerId: 1 });

    expect(mailSent).toBe(true);
  });
});
