import { elements } from "./variables.js";
let ProjectContainer = document.querySelector("#ProjectContainer");
console.log("ok" + "2");

for (let i = 0; i < 3; i++) {
  let element = elements[i];
  let project = document.createElement("div");
  project.id = "project";
  if (i % 2 == 1) {
    project.classList.add("reverse");
  }
  let projectContent = document.createElement("div");
  projectContent.id = "projectContent";
  let html;

  html = `
        <h3 class="mainColor">${element.nom}</h3>
        <p>${element.description}
        </p>`;
  let list = `<ul class="d-flex gap-4">`;
  let color;
  element.categories.forEach((categorie) => {
    switch (categorie) {
      case "Js":
        color = "yellow";
        break;
      case "Html":
        color = "orange";
        break;
      case "Css":
        color = "blue";
        break;
      case "Bootstrap":
        color = "red";
        break;
    }
    list += `<li class=${color}>${categorie}</li>`;
  });
  list += `</ul>`;
  html += list;
  html += `
        <ul class="d-flex gap-4">
        <li>
            <a href="${element.path}" target="_blank"><i class="bi bi-github"></i></a>
        </li>
        <li>
            <a href="${element.path}" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a>
        </li>
    </ul>`;
  projectContent.innerHTML = html;
  project.appendChild(projectContent);
  let projectImg = document.createElement("div");
  projectImg.id = "projectImg";
  projectImg.innerHTML = `<a href="">
    <div class="imgWrapper">
        <img src="${element.image}" alt="${element.name}" />
    </div>
    </a>`;
  project.appendChild(projectImg);
  ProjectContainer.appendChild(project);
}

// <div id="project" class="reverse">
//         <div id="projectContent">
//             <h3 class="mainColor">Front End mentor Form</h3>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
//                 officia eveniet quasi minus libero nulla magnam illum asperiores
//                 inventore,
//             </p>
//             <ul class="d-flex gap-4">
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>JavaScript</li>
//             </ul>
//             <ul class="d-flex gap-4">
//                 <li>
//                     <a href=""><i class="bi bi-github"></i></a>
//                 </li>
//                 <li>
//                     <a href=""><i class="bi bi-box-arrow-up-right"></i></a>
//                 </li>
//             </ul>
//         </div>
//         <div id="projectImg">
//             <a href="">
//                 <div class="imgWrapper">
//                     <img src="img/project/cross-fit.jpg" alt="" />
//                 </div>
//             </a>
//         </div>
//     </div>
