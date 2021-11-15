const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.handle = validText(data.handle) ? data.handle : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  //   debugger;
  if (!Validator.isLength(data.handle, { min: 2, max: 30 })) {
    errors.handle = "handle must be between 2 to 30 chars";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "handle is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "email is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "email is invalid";
  }

  if (!Validator.isLength(data.password, { min: 2, max: 30 })) {
    errors.password = "password must be between 2 to 30 chars";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "password is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "confirm password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "password must match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// let result = validateRegisterInput({ handle: "hii", email: "emily@aa.com" });
// console.log(result);
