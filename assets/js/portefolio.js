// varaible global
let zone1 = document.querySelector("#zone1");
let overlay = document.querySelector("#overlay");
let zone2 = document.querySelector("#zone2");
let selectContainer = document.querySelector("#selectContainer");
console.log(selectContainer);

// tableau d'objets

// je me suis permis de creer des prix aleatoire sur certain objets (les 2 dernier de chaques catégories)
let elements = [
  {
    image: "FEM_Rock_Paper_Scissor.jpg",
    path: "projects/rock-paper-scissors-master",
    nom: "FEM : Rock Paper Scissors",
    categories: ["Js", "Html", "Css"],
    description: "lorem ipsum ......",
  },
  {
    image: "FEM-Form.jpg",
    path: "projects/intro-component-with-signup-form-master",
    nom: "FEM : Creation Formulaire",
    categories: ["Js", "Html", "Css"],
    description: "lorem ipsum ......",
  },
  {
    image: "Cross_Fit.jpg",
    path: "projects/FitClub",
    nom: "Front page site crossFit",
    categories: ["Html", "Css"],
    description: "lorem ipsum ......",
  },
  {
    image: "FEM_Product_Card.jpg",
    path: "projects/product-preview-card-component-main",
    nom: "FEM : Creation d'une fiche produit",
    categories: ["Html", "Css"],
    description: "lorem ipsum ......",
  },
  {
    image: "Cornfood.jpg",
    path: "projects/Cornfood",
    nom: "Front page site e-commerce",
    categories: ["Html", "Css"],
    description: "lorem ipsum ......",
  },
  {
    image: "FEM_PreviewCard.png",
    path: "projects/nft-preview-card",
    nom: "FEM : Creation d'une carte NFT",

    categories: ["Html", "Css"],
    description: "lorem ipsum ......",
  },
  {
    image: "FEM_ProfilCard.jpg",
    path: "projects/Profile-card-component-main",
    nom: "FEM : Creation d'une fiche profil",
    categories: ["Html", "Css"],
    description: "lorem ipsum ......",
  },
  {
    image: "FEM_QrCode.png",
    path: "projects/qr-code",
    nom: "FEM : Creation d'un QrCode",
    categories: ["Html", "Css"],
    description: "lorem ipsum ......",
  },
];

createVignettes(elements);

// cette fonction prend un tableau d'object en parametre et créer une balise <figure> pour chacun des objet du tableau, elle place aussi un ecouteur d'evenement sur la balise
//ex :

/* <figure>
  <img src="img/animal1.jpg" alt="image animal 1">
  <figcaption>animal 1</figcaption>
</figure> */

function createVignettes(listElements) {
  listElements.forEach(function (element, i) {
    // on creé la balise ainsi que le HTML
    let vignette = document.createElement("figure");
    vignette.classList = "vignette";
    vignette.id = `v${i}`;
    vignette.innerHTML = `<img src="assets/img/project/${element.image}"
    alt="image ${element.nom}">
    <figcaption>${element.nom}</figcaption>`;

    // au click on appelle la fonction qui mdifie la zone1 et affiche l'image
    vignette.onclick = () => {
      afficherImage(element);
    };
    zone2.appendChild(vignette);
  });
}

// cette fonction prend un object en parametre. le but de cette fonction est d'afficher l'image en bg ainsi que les prorieté dans l'overlay de maniere dynamique

function afficherImage(objetImage) {
  zone1.style.backgroundImage = `url(assets/img/project/${objetImage.image})`;
  let html = "";
  // on affiche toutes les propriete
  let name = `<h3>${objetImage.nom}</h3>`;
  let description = `<p>${objetImage.description}</p>`;
  let categories = `<ul class="d-flex gap-3">`;
  let color;
  objetImage.categories.forEach((categorie) => {
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
    categories += `<li class=${color}>${categorie}</li>`;
  });
  categories += `</ul>`;
  html = name + description + categories;
  html += `<a href=${objetImage.path} target="_blank" class="myBtn">Visiter</a>`;
  overlay.innerHTML = html;
}

// le but de cette fonction est de crée dinamiquement un element html select dont les option correspond au nombre de catégories du tableau Elements
// ex :
//<select>
// <option value="1">value 1</otpion>
//<option value="2"> value 2</otpion>
//</select>

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
