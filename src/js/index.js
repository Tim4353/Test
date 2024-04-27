import cardData from "./dataCard.js";
const cards = document.querySelector(".cards");
// const cardData = [
//   {
//     cardImgD: "https://live.verstaem.online/house/data/images/1.jpg",
//     cardAutorD: "Марсель Руссо",
//     cardTitleD: "Охота Амура",
//     cardCanvD: "Холст, масло (50х80)",
//     cardPriceD: "14 500 руб",
//   },
//   {
//     cardImgD: "https://live.verstaem.online/house/data/images/2.jpg",
//     cardAutorD: "Анри Селин",
//     cardTitleD: "Дама с собачкой",
//     cardCanvD: "Акрил, бумага (50х80)",
//     cardPriceD: "16 500 руб",
//   },
//   {
//     cardImgD: "https://live.verstaem.online/house/data/images/3.jpg",
//     cardAutorD: "Франсуа Дюпон",
//     cardTitleD: "Процедура",
//     cardCanvD: "Цветная литография (40х60)",
//     cardPriceD: "20 000 руб",
//   },
//   {
//     cardImgD: "https://live.verstaem.online/house/data/images/4.jpg",
//     cardAutorD: "Луи Детуш",
//     cardTitleD: "Роза",
//     cardCanvD: "Бумага, акрил (50х80)",
//     cardPriceD: "12 000 руб",
//   },
//   {
//     cardImgD: "https://live.verstaem.online/house/data/images/5.jpg",
//     cardAutorD: "Франсуа Дюпон",
//     cardTitleD: "Птичья трапеза",
//     cardCanvD: "Цветная литография (40х60)",
//     cardPriceD: "22 500 руб",
//   },
//   {
//     cardImgD: "https://live.verstaem.online/house/data/images/6.jpg",
//     cardAutorD: "Пьер Моранж",
//     cardTitleD: "Пейзаж с рыбой",
//     cardCanvD: "Цветная литография (40х60)",
//     cardPriceD: "20 000 руб",
//   },
// ];

// function createCard(data) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const cardImg = document.createElement("img");
//   cardImg.src = data.cardImgD;

//   const cardSpan = document.createElement("span");
//   cardSpan.textContent = data.cardAutorD;

//   const cardH5 = document.createElement("h5");
//   cardH5.textContent = data.cardTitleD;

//   const cardH6 = document.createElement("h6");
//   cardH6.textContent = data.cardCanvD;

//   const cardP = document.createElement("p");
//   cardP.textContent = data.cardPriceD;

//   const cardBtn = document.createElement("button");
//   cardBtn.textContent = "В корзину";

//   card.appendChild(cardImg);
//   card.appendChild(cardSpan);
//   card.appendChild(cardH5);
//   card.appendChild(cardH6);
//   card.appendChild(cardP);
//   card.appendChild(cardBtn);

//   return card;
// }

function createCards() {
  cardData.forEach((data) => {
    const card = createCard2(data);
  });
}

function createCard2(data) {
  const card = `
  <div class="card"><img src=${data.cardImgD}>
      <span>${data.cardAutorD}</span>
      <h5>${data.cardTitleD}</h5>
      <h6>${data.cardCanvD}</h6>
      <p>${data.cardPriceD}</p><button>В корзину</button>
  </div>
  `;
  cards.innerHTML += card;
}

createCards();
createCard2();
