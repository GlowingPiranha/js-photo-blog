// // * prova di generate card
// const generatePolaroid = (item) => {
//   const { url, title, date } = item;

//   const polaroidCard = `<div class="col d-flex justify-content-center align-items-center">
//           <div class="polaroid-wrapper">
//             <img src="/assets/img/pin.svg" alt="pin" class="pin-img">
//             <div class="polaroid">
//               <img src="${url}" alt="dummy" class="img-width">
//               <div class="text font-edu">${title}</div>
//               <div class="text font-mono">${date}</div>
//             </div>
//           </div>
//         </div>`;

//   return polaroidCard;
// };


const container = document.getElementById(`multi-polaroid`);

axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
  console.log(resp.data)
  // ! constrollo i dati che ho ricevuto
  const generatePolaroid = resp.data;
  for (let i = 0; i < generatePolaroid.length; i++) {
    // metto i dati nella card html con innerhtml
    container.innerHTML += `<div class="col d-flex justify-content-center align-items-center">
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

});