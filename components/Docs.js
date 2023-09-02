import { createEl } from "../library.js";

export default function createDocs(parent) {
  const docSection = createEl("section", parent);
  createEl("h2", docSection, "Documentation");

  createEl(
    "p",
    docSection,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus maxime eum delectus distinctio inventore illo alias earum magni nisi cupiditate, esse hic architecto doloremque, illum voluptatem, repellendus sint id ipsa labore. Consequatur, quaerat. Earum, doloribus perspiciatis nemo molestiae veritatis ex nihil nobis vero dolorum alias atque reprehenderit fugiat, veniam minima iste repellendus laboriosam a numquam? Unde optio saepe nemo aperiam? Incidunt dolor repellendus id temporibus nisi? Esse non rerum quae exercitationem repellendus aspernatur, neque, natus ab eveniet magni sequi culpa dolorem vel voluptatem corporis odit facilis architecto deserunt. Voluptatem porro expedita quo magnam! Soluta ipsum suscipit vitae voluptates dolorum.`
  );
  return docSection;
}
