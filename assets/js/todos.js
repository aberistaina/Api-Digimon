$("document").ready( function (){
    datos();
  let carta = document.querySelector("#carta")
  let numero = 1
  
  function datos () {
  
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then(response => response.json())
      .then(datos => {
        card(datos)
  })
  }
  
  function card(datos) {
  
  
    for (temp of datos) {
      
      carta.innerHTML += `
            <div class="card  col-lg-2 col-md-3 col-sm-5 col-12  m-2 border border-secondary border border-4 bg-info-subtle" >
                <img src="${temp.img}" class="card-img-top mt-4" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><b> #${numero} ${temp.name}</b></h5>
                    <p class="card-text"><b>Level:</b> ${temp.level}</p>
                </div>
            </div>

<div class="modal" tabindex="-1" id = "modal">
  <div class="modal-dialog">
    <div class="modal-content">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    <img src="${temp.img}" class="card-img-top mt-4" alt="...">
      <div class="modal-header">
      
        <h5 class="modal-title">${numero} ${temp.name}</h5>
        
      </div>
      <div class="modal-body">
        <p><b>Level:</b> ${temp.level}.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


      `
      numero ++
    }
  }


})