import { createEl } from "./library.js";

const createHeader = () => {
  const header = createEl("header");
  const title = createEl("h1", header);
  title.setEl((h1) => {
    h1.innerText = "Pokemon Search";
  });
};

createHeader();

const createMain = () => {
  const main = createEl("main");
  const cardList = createCardList(main);
};

const createCardList = (main) => {
  const cardList = createEl("div", main);
  cardList.setEl((div) => (div.id = "card-list"));
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      return res.json();
    })
    .then(({ results }) => {
      results.map((pokemon) => createCard(cardList, pokemon));
    });
};

const createCard = (cardList, pokemon) => {
  const card = createEl("div", cardList);
  card.setEl((div) => (div.className = "card"));
  const cardImg = createEl("img", card);
  const cardP = createEl("p", card);
  fetch(pokemon.url)
    .then((res) => {
      return res.json();
    })
    .then((pokeData) => {
      cardP.setEl((p) => (p.innerText = pokemon.name));
      cardImg.setEl((img) => (img.src = pokeData.sprites.front_default));
    });
};

createMain();
