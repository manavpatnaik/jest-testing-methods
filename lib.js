const db = require("./db");
const sendMail = require("./mail");

module.exports.absolute = function (num) {
  return num >= 0 ? num : -num;
};

module.exports.greet = function (name) {
  return "Welcome " + name;
};

module.exports.getCurrencies = function () {
  return ["USD", "AUD", "EUR"];
};

module.exports.getProduct = function (productId) {
  return { id: productId, price: 10 };
};


