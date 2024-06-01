//CONEXION CON LA API
const btnAnt = document.getElementById("btnAnt");
const btnSig = document.getElementById("btnSig");
const contenedor = document.getElementById("tcont");
let pagina = 1;
btnAnt.addEventListener("click", ()=>{
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
});
btnSig.addEventListener("click", ()=>{
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
});
const cargarPeliculas = async()=>{
   try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dcfbd444b10865202374037054fd4224&language=es-MX&page=${pagina}`)
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos);
            let peliculas = [];
            datos.results.forEach(pelicula => {
                peliculas =+ `
                <div class="peliculas">
                    <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="imgTendencia" alt="...">
                    <div class="tituloPelicula">
                        <h5>${pelicula.title} </h5>
                    </div>
                </div>
                `;            
            });
            contenedor.innerHTML = peliculas;
        }
    }
   catch(error){
    console.log(error.message);
   }
}
cargarPeliculas();
// VALIDACION
// DATOS
let nombre = document.getElementById('nombre').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let errorElement = document.getElementById('error');
// Función para validar el formato del email
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
//VALIDACION REGISTRO
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();                                             // Evita el envío del formulario
    errorElement.textContent = '';                                      // Limpiar mensajes de error previos
    if (nombre.trim() === '') {                                         // Validar que el nombre no esté vacío
        errorElement.textContent = 'El nombre es requerido.';   
        return;
    }
    if (apellido.trim() === '') {                                       // Validar que el apellido no esté vacío
        errorElement.textContent = 'El apellido es requerido.';   
        return;
    }
    if (!validateEmail(email)) {                                        // Validar que el email tenga el formato correcto
        errorElement.textContent = 'El email no es válido.';
        return;
    }
    if (password.trim() === '') {                                       // Validar que la contraseña no esté vacía
        errorElement.textContent = 'La contraseña es requerida.';   
        return;
    }
    errorElement.textContent = 'Formulario enviado correctamente.';     // Si todas las validaciones pasan, enviar el formulario
});
//VALIDACION INICIAR SESION
document.getElementById('iniciarForm').addEventListener('submit', function(event) {
    event.preventDefault();                                             // Evita el envío del formulario
    errorElement.textContent = '';                                      // Limpiar mensajes de error previos
    if (!validateEmail(email)) {                                        // Validar que el email tenga el formato correcto
        errorElement.textContent = 'El email no es válido.';
        return;
    }
    if (password.trim() === '') {                                       // Validar que la contraseña no esté vacía
        errorElement.textContent = 'La contraseña es requerida.';   
        return;
    }
    errorElement.textContent = 'Formulario enviado correctamente.';     // Si todas las validaciones pasan, enviar el formulario
});