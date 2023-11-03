document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form");
  
    form.addEventListener("submit", function(event) {
      // Evitar que el formulario se envíe automáticamente
      event.preventDefault();
  
      // Validar campos
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var dni = document.getElementById("DNI").value;
      var email = document.getElementById("email").value;
      var telefono = document.getElementById("telefono").value;
      var tipoSeguro = document.querySelector("select").value;
  
      // Validar nombre y apellido (máximo 20 caracteres, solo letras)
      if (!/^[A-Za-z]{1,20}$/.test(nombre) || !/^[A-Za-z]{1,20}$/.test(apellido)) {
        swal("El nombre y el apellido deben contener solo letras y tener un máximo de 20 caracteres.");
        return;
      }
  
      // Validar DNI (solo números, máximo 8 caracteres)
      if (!/^\d{1,8}$/.test(dni)) {
        swal("El DNI debe contener solo números y tener un máximo de 8 caracteres.");
        return;
      }
  
      // Validar email (correo electrónico válido)
      if (!isValidEmail(email)) {
        swal("Por favor, introduce un correo electrónico válido.");
        return;
      }
  
      // Validar teléfono (solo números)
      if (!/^\d+$/.test(telefono)) {
        swal("El teléfono debe contener solo números.");
        return;
      }
  
      // Validar que se elija una opción
      if (tipoSeguro === "") {
        swal("Por favor, elige un paquete de seguro.");
        return;
      }
  
      // Mostrar el valor del seguro (aquí puedes calcularlo según el tipo de seguro seleccionado)
      var valorSeguro = calcularValorSeguro(tipoSeguro);
      document.querySelector("div p").innerText = "Valor del Seguro: " + valorSeguro;
  
      // Puedes enviar el formulario aquí si todo está validado
      // form.submit();
    });
  
    function isValidEmail(email) {
      // Expresión regular para validar un correo electrónico
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
  });
  
  