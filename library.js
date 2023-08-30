const root = document.getElementById("root");

const virtualRoot = document.createElement("div");
virtualRoot.id = "root";

export const render = () => {
  root.replaceWith(virtualRoot.cloneNode(true));
};

export const createEl = (tag, parent) => {
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

export const duplicateEl = (elObj, amount, mapFunc) => {
  const array = [];
  for (let i = 0; i < amount; i++) {
    array.push(elObj.el.cloneNode(true));
  }
  return array.map(mapFunc);
};
