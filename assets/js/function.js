export function openTabContent(e) {
  let tabs = document.querySelectorAll("#AccordionTab li");
  let contents = document.querySelectorAll("#AccordionContent");
  let classcontent = e.dataset.classcontent;
  console.log(e.dataset.classcontent);
  tabs.forEach((tab) => {
    tab.classList.remove("selected");
  });
  contents.forEach((contents) => {
    contents.style.display = "none";
  });
  e.classList.add("selected");
  let currentContent = document.querySelector(`.${classcontent}`);
  console.log("CurrentContent ", currentContent);
  currentContent.style.display = "block";
  currentContent.classList.add("test");
}
export function reveal() {
  var reveals = document.querySelectorAll(".animate");

  reveals.forEach((element, i) => {
    if (i % 2 == 0) {
      element.classList.add("animation-left");
    } else {
      element.classList.add("animation-right");
    }
  });

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;

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
    projectImg.innerHTML = `<a href="?page=portefolio">
        <div class="projectWrapper"><i class="bi bi-eye-fill"></i></div>
        <img src="${element.image}" alt="${element.name}" />
    </a>`;
    project.appendChild(projectImg);
    ProjectContainer.appendChild(project);
  }
}
