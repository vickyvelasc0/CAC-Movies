document.getElementById('isForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario
  // Obtener los valores de los campos del formulario
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let errorElement = document.getElementById('error');
  // Limpiar mensajes de error previos
  errorElement.textContent = '';
  // Validar que el email tenga el formato correcto
  if (!validateEmail(email)) {
      errorElement.textContent = 'El email no es válido.';
      return;
  }
  // Validar que la contraseña tenga al menos 8 caracteres
  if (password.length < 8) {
      errorElement.textContent = 'La contraseña debe tener al menos 8 caracteres.';
      return;
  }
  // Si todas las validaciones pasan, enviar el formulario
  errorElement.textContent = 'Formulario enviado correctamente.';
  // Aquí puedes enviar el formulario o hacer cualquier otra acción necesaria
});

// Función para validar el formato del email
function validateEmail(email) {
  // Expresión regular para validar el formato del email
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}