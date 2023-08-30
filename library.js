const root = document.getElementById("root");

const virtualRoot = document.createElement("div");
virtualRoot.id = "root";

const render = () => {
  root.replaceWith(virtualRoot.cloneNode(true));
};

const createEl = (tag, parent) => {
  const el = document.createElement(tag);

  const setEl = (func) => {
    if (func) func(el);
  };

  const setChildren = (func) => {
    const currentChildren = Array.from(el.children);
    const childrenArray = func(currentChildren);
    while (el.firstChild) el.removeChild(el.firstChild);
    childrenArray.forEach((child) => {
      el.append(child);
    });
  };

  if (parent) parent.el.append(el);
  else if (parent === undefined) virtualRoot.append(el);

  return { el, setEl, setChildren };
};

const duplicateEl = (elObj, amount, mapFunc) => {
  const array = [];
  for (let i = 0; i < amount; i++) {
    array.push(elObj.el.cloneNode(true));
  }
  return array.map(mapFunc);
};

//  --------------------------------

const data = ["item1", "item2", "item3", "item4", "item5"];

const main = createEl("main");
const header = createEl("header", main);

const titleH1 = createEl("h1", header);
titleH1.setEl((title) => {
  title.innerText = "This is my title";
});

const list = createEl("ul", main);
const listItem = createEl("li", null);

const listItems = duplicateEl(listItem, data.length, (listItem, i, array) => {
  listItem.id = `item-${i + 1}`;
  listItem.class = `list-item`;
  listItem.innerText = data[i];
  return listItem;
});
list.setChildren((prevChildren) => {
  return [...prevChildren, ...listItems];
});

render();
