module.exports.getCustomerSync = function (id) {
  console.log("Reading from DB");
  return { id, points: 15 };
};

module.exports.getCustomer = async function (id) {
  return new Promise((res, rej) => {
    console.log("Reading from DB");
    res({ id, points: 15 });
  });
};
