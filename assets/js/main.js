let contenido = document.querySelector("#contenido");
let boton2 = document.querySelector("#boton2");
let boton = document.querySelector("#boton");
let enter1 = document.querySelector("#numero")
let enter2 = document.querySelector("#nombre")
let eleccion =  0;
let eleccion2 = ""

function digimon(){

eleccion = parseInt(document.getElementById("numero").value) - 1;
if (eleccion < 0 || eleccion >208){
  alert("El numero que estás eligiendo no es correcto")
}else {


fetch('https://digimon-api.vercel.app/api/digimon')

    .then(response => response.json())
    .then(datos => {
        card(datos[eleccion])
})}
}



boton.addEventListener("click", digimon)

enter1.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    digimon();
  }
});



function card(temp) {  
  
    contenido.innerHTML = `
        <img src="${temp.img}" class="card-img-topg mt-4" alt="..." id="foto">
        <div class="card-body ">
          <h5 class="card-title" id="titulo"><b>${temp.name}</b></h5>
          <hr>
          <p class="card-text" id="descripcion">${temp.level}</p>
        </div>
`
}



function digimon2(){

  eleccion2 = document.getElementById("nombre").value.toLowerCase();


  fetch('https://digimon-api.vercel.app/api/digimon')
  
  .then(response => response.json())
  .then(data => {
    const digimon = data.find(digimon => digimon.name.toLowerCase() === eleccion2);
    if (digimon) {
      card2(digimon);
    } else {
      alert("No se encontró ningún digimon con ese nombre.");
    }
  }
  )}

  
  boton2.addEventListener("click", digimon2)
  
  enter2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      digimon2();
    }
  });
  
  
  function card2(valor) {  
    
      contenido.innerHTML = `

          <img src="${valor.img}" class="card-img-topg mt-4 " alt="..." id="foto">
          <div class="card-body">
            <h5 class="card-title" id="titulo"><b>${valor.name}</b></h5>
            <hr>
            <p class="card-text" id="descripcion">${valor.level}</p>
          </div>

  `
  }
  