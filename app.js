import { createEl, duplicateEl, render } from "./library.js";

// const data = ["item1", "item2", "item3", "item4", "item5"];

// const main = createEl("main");
// const header = createEl("header", main);

// const titleH1 = createEl("h1", header);
// titleH1.setEl((title) => {
//   title.innerText = "This is my title";
// });

// const list = createEl("ul", main);
// const listItem = createEl("li", null);

// const listItems = duplicateEl(listItem, data.length, (listItem, i, array) => {
//   listItem.id = `item-${i + 1}`;
//   listItem.class = `list-item`;
//   listItem.innerText = data[i];
//   return listItem;
// });

// list.setChildren((prevChildren) => {
//   return [...prevChildren, ...listItems];
// });

// render();

const header = createEl("header");

const title = createEl("h1", header);
title.setEl((title) => {
  title.innerText = "Welcome to my website :)";
});

const main = createEl("main");

const button = createEl("button", main);
button.setEl((button) => {
  button.innerText = "I am a button";
  button.onclick = () => {
    console.log("click");
  };
  console.dir(button);
});

render();
