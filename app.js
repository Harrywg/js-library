import { createEl } from "./library.js";
import hljs from "./highlight/highlight.min.js";

import createIntro from "./components/Intro.js";
import createDocs from "./components/Docs.js";

function createHeader() {
  const header = createEl("header");
  header.setEvent("onscroll", () => {
    console.log("scroll");
  });
  createEl("h1", header, "Create.js");

  document.addEventListener("scroll", (e) => {
    const headerEl = document.getElementsByTagName("header")[0];
    const yPos = headerEl.getBoundingClientRect().y;
    if (yPos === 0) {
      headerEl.classList = "header-stuck";
    } else headerEl.classList = "";
  });

  return header;
}

function createMain() {
  const main = createEl("main");
  const introSection = createIntro(main);
  const docSection = createDocs(main);
  return main;
}

const header = createHeader();
const main = createMain();

hljs.highlightAll();
