import { elements } from "./variables.js";

// varaible global
let zone1 = document.querySelector("#zone1");
let overlay = document.querySelector("#overlay");
let zone2 = document.querySelector("#zone2");
let selectContainer = document.querySelector("#selectContainer");
console.log(selectContainer);

createVignettes(elements);

function createVignettes(listElements) {
  listElements.forEach(function (element, i) {
    // on creé la balise ainsi que le HTML
    let linkWrapper = document.createElement("a");
    linkWrapper.href = "#Realisation";
    let vignette = document.createElement("figure");
    linkWrapper.classList = "vignette";
    vignette.id = `v${i}`;
    vignette.innerHTML = `
    <div>
      <img src="${element.image}" alt="image ${element.nom}">
      <div class="projectWrapper"><i class="bi bi-eye-fill"></i></div>
    </div>
    <figcaption>${element.nom}</figcaption>`;

    // au click on appelle la fonction qui mdifie la zone1 et affiche l'image
    vignette.onclick = () => {
      afficherImage(element);
    };
    linkWrapper.appendChild(vignette);
    zone2.appendChild(linkWrapper);
  });
}

// cette fonction prend un object en parametre. le but de cette fonction est d'afficher l'image en bg ainsi que les prorieté dans l'overlay de maniere dynamique

function afficherImage(objetImage) {
  zone1.style.backgroundImage = `url(${objetImage.image})`;
  zone1.innerHTML = `
  <a href="${objetImage.path}" target="_blank"> 
  </a>`;
  let html = "";
  // on affiche toutes les propriete
  let name = `<h3>${objetImage.nom}</h3>`;
  let description = `<p>${objetImage.description}</p>`;
  let categories = `
  <div><p>Languages:</p>
  <ul class="d-flex gap-3">`;
  let color;
  objetImage.categories.forEach((categorie) => {
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
      case "Bootstrap":
        color = "purple";
        break;
      case "Symfony":
        color = "indigo";
        break;
      case "Angular":
        color = "red";
        break;
    }
    categories += `<li class=${color}>${categorie}</li>`;
  });
  categories += `</ul> </div>`;
  html = name + description + categories;
  html += `<a href=${objetImage.path} target="_blank" class="myBtn">Visiter</a>`;
  overlay.innerHTML = html;
}

createSelectHtmlElement();

function createSelectHtmlElement() {
  // on creer la balise
  let selectCategory = document.createElement("select");
  selectCategory.classList.add("mainColor");
  selectCategory.id = "selectCategory";

  // on recupere dinamiquement la list de toute les categories possible dans elements
  let categories = recoverCategorie(elements);

  // on creer autant d'option qu'il y a de categories

  let html = `<option value="">Tout voir</option>`;
  categories.forEach((category) => {
    html += `<option value="${category}">${category}</option>`;
  });
  selectCategory.innerHTML = html;

  // on place un ecouteur d'evement au changement de valeur du select en vue d'afficher les vignettes corespondantes a la categorie selectionner
  selectCategory.onchange = MAJvignette;
  selectContainer.appendChild(selectCategory);
}

function MAJvignette() {
  // on recupert un tableau filter qui ne contient que les objet qui on la proprieté categorie correspondant a la valeur de l'imput
  let filterdElements = elements.filter((element) => {
    if (selectCategory.value == "") {
      // ceci correspond à l'option pas defaut tt afficher
      return true;
    } else {
      return element.categories.includes(selectCategory.value);
    }
  });

  // on enleve toute les vignettes deja creer
  let allvignettes = document.querySelectorAll(".vignette");
  allvignettes.forEach((vignette) => {
    vignette.remove();
  });

  // on creer les nouvelles vignettes
  createVignettes(filterdElements);
  // on affiche en zone 1 la 1ere vignette de nouveau tableau filtré
  afficherImage(filterdElements[0]);
}

function recoverCategorie(tabObject) {
  let categorie = [];
  tabObject.forEach((object) => {
    // si la cagetorie n'exite pas deja on l'inclue dans le tableau
    object.categories.forEach((element) => {
      if (!categorie.includes(element)) {
        categorie.push(element);
      }
    });
  });
  return categorie;
}

// affichage de la 1ere image de Elements au chargement cf
window.onload = () => {
  afficherImage(elements[0]);
};
