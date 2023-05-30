$(document).ready(function() {

  
    $.validator.addMethod("rutChileno", function(value, element) {
      
      value = value.replace(/[.-]/g, "");
  
 
      if (value.length < 8 || value.length > 9) {
        return false;
      }
  
     
      var validChars = "0123456789K";
      var lastChar = value.charAt(value.length - 1).toUpperCase();
      if (validChars.indexOf(lastChar) == -1) {
        return false;
      }
  
     
      var rut = parseInt(value.slice(0, -1), 10);
      var factor = 2;
      var sum = 0;
      var digit;
      while (rut > 0) {
        digit = rut % 10;
        sum += digit * factor;
        rut = Math.floor(rut / 10);
        factor = factor === 7 ? 2 : factor + 1;
      }
      var dv = 11 - (sum % 11);
      dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
  
      return dv === lastChar;
    }, "Por favor ingrese un RUT válido."); 

  $("#formulario-registro ").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true
      },
      nombres: {
        required: true,
      },
      apellidos:{
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      direccion:{
        required: true,
      },

      password: {
        required: true,
        minlength: 5,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
    }, 
    messages: {
      rut: {
        required: "El rut es un campo obligatorio",
        rutChileno: "El formato del rut no es válido"
      },
      nombres: {
        required: 'El nombre es obligatorio',
      },
      apellidos:{
        required: 'El apellido es obligatorio'
      },
      email: {
        required: "El email es un campo requerido",
        email: "El email no cumple el formato de un correo",
      },
      direccion:{
        required: 'La direccion es obligatoria'
      },
      password: {
        required: "La contraseña es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual al campo contraseña",
      },
    },
  });
});