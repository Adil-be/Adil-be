export function openTabContent(e) {
  let tabs = document.querySelectorAll("#AccordionTab li");
  let contents = document.querySelectorAll("#AccordionContent");
  let classcontent = e.dataset.classcontent;

  tabs.forEach((tab) => {
    tab.classList.remove("selected");
  });
  contents.forEach((contents) => {
    contents.style.display = "none";
  });
  e.classList.add("selected");
  let currentContent = document.querySelector(`.${classcontent}`);

  currentContent.style.display = "block";
}
export function reveal() {
  let reveals = document.querySelectorAll(".animate");

  reveals.forEach((element, i) => {
    if (i % 2 == 0) {
      element.classList.add("animation-left");
    } else {
      element.classList.add("animation-right");
    }
  });

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

export function creationProject(elements) {
  let ProjectContainer = document.querySelector("#ProjectContainer");
  for (let i = 0; i < 3; i++) {
    let element = elements[i];
    let project = document.createElement("div");
    project.id = "project";
    project.classList.add("animate");
    if (i % 2 == 1) {
      project.classList.add("reverse");
    }
    let projectContent = document.createElement("div");
    projectContent.className = "projectContent";
    let html;

    html = `
        <h3 class="mainColor">${element.nom}</h3>
        <p>${element.description}
        </p>`;
    let list = `<ul class="d-flex gap-4">`;
    let color;
    element.categories.forEach((categorie) => {
      switch (categorie) {
        case "JS":
          color = "yellow";
          break;
        case "HTML":
          color = "orange";
          break;
        case "CSS":
          color = "blue";
          break;
        case "PHP":
          color = "indigo";
          break;
        case "Symfony":
          color = "indigo";
          break;
        case "Angular":
          color = "red";
          break;
        case "Bootstrap":
          color = "purple";
          break;
      }
      list += `<li class=${color}>${categorie}</li>`;
    });
    list += `</ul>`;
    html += list;
    html += `
        <ul class="d-flex gap-4">
        <li>
            <a href="${element.github}" target="_blank"><i class="bi bi-github"></i></a>
        </li>
        <li>
            <a href="${element.path}" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a>
        </li>
    </ul>`;
    projectContent.innerHTML = html;
    project.appendChild(projectContent);
    let projectImg = document.createElement("div");
    projectImg.className = "projectImg";
    projectImg.innerHTML = `<a href="${element.path}" target="_blank">
        <div class="projectWrapper"><i class="bi bi-eye-fill"></i></div>
        <img src="${element.image}" alt="${element.name}" />
    </a>`;
    project.appendChild(projectImg);
    ProjectContainer.appendChild(project);
  }
}
