const validText = (str) => {
  return typeof str === "string" && str.trim().length > 0;
};

// console.log(validText("emily@comerw"));
module.exports = validText;
