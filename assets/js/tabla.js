$("document").ready( function (){
  datos();

let tabla = document.querySelector("#tabla")

function datos () {

  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(datos => {
      card(datos)
})
}

function card(datos) {

let numero = 1


let cabecera = `



`

tabla.innerHTML += cabecera;

  for (temp of datos) {
    
    tabla.innerHTML += `

  <tbody>
    <tr class="table-primary">
      <th scope="row">${numero}</th>
      <td><a class="enlace" href="https://digimon.fandom.com/es/wiki/${temp.name}" target="_blank" >${temp.name}</a></td>
      <td>${temp.level}</td>
      <td ><a href="${temp.img}" target="_blank"><img src="${temp.img}" alt="" style="height: 40px; width: 40px;" class="imagen " id = "imagen"></a></td>
    </tr>

  </tbody>
    `

    numero ++

    
  }

  let imagenes = document.querySelectorAll("#imagen")

  for (let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener("mouseenter", function(){
      this.classList.add("agrandar")
      this.classList.remove("imagen")
    })
    imagenes[i].addEventListener("mouseout", function(){
      this.classList.remove("agrandar")
      this.classList.add("imagen")
    })
  }



  
}

}) 
  

function buscar (letra){
  alert(letra)
}


document.querySelectorAll(".letra").forEach(function (elemento) {
  elemento.addEventListener("click", function (){
    buscar(elemento.textContent);
  });
});

