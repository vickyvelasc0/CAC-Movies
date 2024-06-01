document.getElementById('rForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario
  // Obtener los valores de los campos del formulario
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let fechaNacimiento = document.getElementById('fechaNacimiento').value;
  let pais = document.getElementById('pais').value;
  let terminos = document.getElementById('terminos').checked;
  let errorElement = document.getElementById('error');

  errorElement.textContent = '';   // Limpiar mensajes de error previos

  // Validaciones
  if (nombre.trim() === '') {
    errorElement.textContent = 'El nombre es obligatorio.';
    return;
  }
  if (apellido.trim() === '') {
    errorElement.textContent = 'El apellido es obligatorio.';
    return;
  }
  if (!validateEmail(email)) {
    errorElement.textContent = 'El email no es válido.';
    return;
  }
  if (password.length < 8) {
    errorElement.textContent = 'La contraseña debe tener al menos 8 caracteres.';
    return;
  }
  if (!isValidDate(fechaNacimiento)) {
    errorElement.textContent = 'La fecha de nacimiento no es válida.';
    return;
  }
  if (pais === '') {
    errorElement.textContent = 'Seleccione un país.';
    return;
  }
  if (!terminos) {
      errorElement.textContent = 'Debe aceptar los términos y condiciones para continuar.';
      return;
  }
  // Si todas las validaciones pasan, enviar el formulario
  errorElement.textContent = 'Formulario enviado correctamente.';
});
// Función para validar email
function validateEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
// Función para validar la fecha
function isValidDate(dateString) {
  let date = new Date(dateString);
  let today = new Date();
  return !isNaN(date.getTime()) && date < today;
}