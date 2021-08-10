const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.correo = !isEmpty(data.correo) ? data.correo : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // Email checks
  if (validator.isEmpty(data.correo)) {
    errors.correo = "Correo requerido";
  } else if (!validator.isEmail(data.correo)) {
    errors.correo = "Correo no válido";
  }
  // Password checks
  if (validator.isEmpty(data.password)) {
    errors.password = "Contraseña requerida";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};