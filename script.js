
const container = document.getElementById(`multi-polaroid`);

axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
  console.log(resp.data)
  // ! constrollo i dati che ho ricevuto
  const generatePolaroid = resp.data;

  let html = "";

  for (let i = 0; i < generatePolaroid.length; i++) {
    // metto i dati nella card html con innerhtml
    html += `<div class="col d-flex justify-content-center align-items-center">
          <div class="polaroid-wrapper">
            <img src="/assets/img/pin.svg" alt="pin" class="pin-img">
            <div class="polaroid">
              <img src="${generatePolaroid[i].url}" alt="dummy" class="img-width">
              <div class="text font-edu">${generatePolaroid[i].title}</div>
              <div class="text font-mono">${generatePolaroid[i].date}</div>
            </div>
          </div>
        </div>`

  }


  container.innerHTML = html;

  // images
  let images = document.querySelectorAll(`.img-width`);
  console.log(images);
  // wrapper
  let wrapper = document.getElementById(`wrapper`)
  console.log(wrapper);
  // img-wrapper
  let imgWrapper = document.getElementById(`fullImg`)
  console.log(imgWrapper);
  // close
  let close = document.querySelector(`span`)

  console.log(close);

  // mi mostra le immagini
  images.forEach((img) => {
    img.addEventListener(`click`, () => {
      openModal(img.src);
    });
  });

  // mi chiude le immagini
  close.addEventListener(`click`, () => {
    wrapper.style.display = `none`;
  })

  // funzione per mostrare overlay e immagini
  function openModal(pic) {
    wrapper.style.display = `flex`;
    imgWrapper.src = pic;
  }

});