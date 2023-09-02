import { createEl } from "../library.js";

export default function createIntro(parent) {
  const introSection = createEl("section", parent);
  createEl("h2", introSection, "Introduction");

  const introP1 = `Hello there! This app was built (in Create.js) to showcase the result of an educational experiment. In order to understand more about frontend libraries/frameworks, I decided to have a go at building one. Create.js is a small library to allow developers an alternate method of DOM manipulation.
`;

  createEl("p", introSection, introP1);

  createEl("button", introSection, (el) => {
    el.innerText = "Skip to Demo";
    el.className = "to-demos-button";
    return el;
  });

  const introP2 = `This library was inspired by React largely in the way that elements are rendered using a virtual DOM. While I'm not familiar with the way that frameworks such as React run behind the scenes I thought there to be no better way to learn than to try and create something similar in a smaller scale, hence the name Creat(e).js / React.js ...`;

  createEl("p", introSection, introP2);

  createEl("h3", introSection, "A Few Points...");
  const bulletPoints = createEl("ul", introSection);
  const bullets = [
    "This is an educational project not intended for building serious applications",
    "The syntax is definitely not as sweet as JSX... atleast it's much clearer what is actually happening under the hood",
    "The render process is inefficient and so I would guess that lots of re-renders will cause serious performance issues",
    "I learned a lot from building this library, and despite the above-mentioned issues I'm quite happy with what I've achieved! ",
  ];
  bullets.forEach((bullet) => createEl("li", bulletPoints, bullet));

  createEl("h3", introSection, "How It Works");

  const introP3 = `The library revolves around a data structure that replicates the tree-like structure of elements in the DOM. Upon render, the data structure recursively appends DOM nodes to the actual DOM. The developer can create new 'virtual elements' which are objects containing a DOM node and methods to safely update data on the page while simultaneously re-rendering.

  This differs from React in that state is only maintained within a virtual element. I suppose that this has upsides and downsides, of which there are probably more downsides. Regardless, on one hand we need to re-render an element manually with the setEl() method, yet at the same time we have a little more control over exactly when our elements are rendered.
  `;

  createEl("p", introSection, introP3);

  const codeExample1 = `const header = createEl("header");
const title = createEl("h1", header, "Hello World!);`;

  const codePre = createEl("pre", introSection);
  createEl("code", codePre, (el) => {
    el.innerHTML = codeExample1;
    return el;
  });

  const introP4 = `Invoking createEl will generate a new virtual element to render, assigning to a variable allows us to access the methods required to alter the state.`;
  createEl("p", introSection, introP4);

  return introSection;
}
