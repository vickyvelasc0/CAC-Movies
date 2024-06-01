//CONEXION CON LA API
const btnAnt = document.getElementById("btnAnt");
const btnSig = document.getElementById("btnSig");
const contenedor = document.getElementById("tendenciasContainer");

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
      let peliculas = [];
      datos.results.forEach(pelicula => {
        peliculas += `
        <div class="tendenciasContainer">
          <a href="detalle.html">
            <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="..." class="peliculas">
            <div class="tituloPelicula">
              <h4>${pelicula.title}</h4>
            </div>
          </a>
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
cargarPeliculas()
//FOOTER Y BOTON
window.onscroll = function() {   //al hacer scroll, ejecuta la funcion
  mostrarFooter();
  mostrarbtn()
};
// Si el usuario ha hecho scroll hacia abajo más de 180px, muestra  footer y boton de flecha hacia arriba
function mostrarFooter() {      
  var boton = document.getElementById("footer");
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      boton.style.display = "block";
  } else {
      boton.style.display = "none";
  }
}
function mostrarbtn() {
  var boton = document.getElementById("volverArriba");
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {    
      boton.style.display = "block";
  } else {
      boton.style.display = "none";
  }
}
document.getElementById('volverArriba').addEventListener('click', function() {  
  window.scrollTo({ top: 0, behavior: 'smooth' });
});