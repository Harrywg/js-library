import { createEl } from "./library.js";

const header = createEl("header");

const title = createEl("h1", header);
title.setEl((h1) => (h1.innerText = "This is my title"));

const nav = createEl("nav", header);

const main = createEl("main");
const mainIntro = createEl("section", main);
const mainIntroP1 = createEl("p", mainIntro);
mainIntroP1.setEl((p) => {
  p.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
suscipit delectus explicabo vitae veritatis dignissimos. Repudiandae
dolorum enim eligendi modi fugiat vero laudantium! Sapiente, minima. Quod
vitae reprehenderit alias blanditiis? `;
});

const mouseElement = createEl("div");

mouseElement.setEl((div) => {
  div.id = "mouse-element";
  div.style.background = `red`;
  div.style.height = `100px`;
});

document.addEventListener("mousemove", (e) => {
  mouseElement.setEl((div) => {
    div.style.height = `${e.clientX / 2}px`;
  });
});

const footer = createEl("footer");
