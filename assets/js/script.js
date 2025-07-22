// richiamo gli elementi dal DOM
const imgList = document.getElementById(`img-list`)
const button = document.getElementById(`close`)
const overlay = document.querySelector(`.overlay`)


// dichiaro le variabili
const linkPhoto = `https://lanciweb.github.io/demo/api/pictures/`


// uso la chiamata axios per richiamare i valori presenti nell'api
axios.get(linkPhoto).then((elem) => {
  const myPhoto = elem.data

  // creo un ciclo for per generare una card per ogni elemento presente nell'api
  for (i = 0; i < myPhoto.length; i++) {
    imgList.innerHTML += `
       <div class="col-12 col-md-6 col-lg-4">
          <div class="card rounded-0 position-relative">
            <div class="position-absolute top-0 start-50 translate-middle"><img src="./assets/img/pin.svg" alt=""></div>
            <img src="${myPhoto[i].url}" class="card-img-top rounded-0 myPadding img-fluid square-image" alt="...">
            <div class="card-body">
              <p class="card-text"><h4>${myPhoto[i].title}</h4></p>
              <p class="card-text font-date">${myPhoto[i].date}</p>
            </div>
          </div>
        </div>`
  }
})


// alla pressione del bottone viene chiusa la schermata di overlay
button.addEventListener(`click`, () => {
  overlay.classList.add(`d-none`)
})