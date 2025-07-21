// richiamo gli elementi dal DOM
const imgList = document.getElementById(`img-list`)

// dichiaro le variabili
const linkPhoto = `https://lanciweb.github.io/demo/api/pictures/`

axios.get(linkPhoto).then((elem) => {
  const myPhoto = elem.data

  for (i = 0; i < myPhoto.length; i++) {
    imgList.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
          <div class="card rounded-0 position-relative">
            <div class="position-absolute top-0 start-50 translate-middle"><img src="./assets/img/pin.svg" alt=""></div>
            <img src="${myPhoto[i].url}" class="card-img-top rounded-0 myPadding img-fluid square-image" alt="...">
            <div class="card-body">
              <p class="card-text"><h4>${myPhoto[i].title}</h4></p>
              <p class="card-text">${myPhoto[i].date}</p>
            </div>
          </div>
        </div>`
  }


})