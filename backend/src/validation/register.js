const validator = require('validator')
const isEmpty = require('is-empty')


module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.nombre = !isEmpty(data.nombre) ? data.nombre : "";
    data.correo = !isEmpty(data.correo) ? data.correo : "";
    data.telefono = !isEmpty(data.telefono) ? data.telefono : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    //data.esProfesor = !isEmpty(data.esProfesor) ? data.esProfesor : "";
    
    // Validar nombre
    if (validator.isEmpty(data.nombre)) {
      errors.nombre = "Nombre obligatorio";
    }

    // Validar correo
    if (validator.isEmpty(data.correo)) {
        errors.correo = "Correo requerido";
    } else if (!validator.isEmail(data.correo)) {
        errors.correo = "Correo no válido";
    }

    // Validar telefono
    if (validator.isEmpty(data.telefono)){
        errors.telefono = "Telefono requerido"
    }

    if (!validator.isLength(data.telefono,{min:7, max:10})){
        errors.telefono = "El campo telefono debe tener por lo menos 7 digitos"
    }

    // Validar contraseña
    if (validator.isEmpty(data.password)) {
        errors.password = "Contraseña requerida";
    }

    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "La contraseña debe tener mínimo 6 carácteres";
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
  };