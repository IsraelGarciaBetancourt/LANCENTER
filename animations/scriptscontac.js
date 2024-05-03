function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);

function validarInput() {
  var nombre = document.getElementById('nombreInput').value;
  var email = document.getElementById('emailInput').value;
  var telefono = document.getElementById('telefonoInput').value;
  var mensaje = document.getElementById('mensajeInput').value;

  if (nombre === '') {
    alert('Por favor escriba su nombre.');
    return false;
  }

  if (email === '') {
    alert('Por favor escriba su email.');
    return false;
  }

  if (telefono === '') {
    alert('Por favor escriba su teléfono.');
    return false;
  }

  if (mensaje === '') {
    alert('Por favor escriba su mensaje.');
    return false;
  }

  // Si todos los campos están llenos, el formulario se envía
  return true;
}
  