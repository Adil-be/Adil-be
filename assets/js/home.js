import { openTabContent } from "./function.js";
import { creationProject } from "./function.js";
import { elements } from "./variables.js";
let firstTab = document.querySelector("#AccordionTab li:first-of-type");
let Tabs = document.querySelectorAll("#AccordionTab li");
console.log(Tabs);
Tabs.forEach((Tab) => {
  Tab.onclick = () => {
    openTabContent(Tab);
  };
});
openTabContent(firstTab);
window.onload = creationProject(elements);
