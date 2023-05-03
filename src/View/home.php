<main class="container">
    <section id="banner" class="row">
        <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start gap-5">
            <div>
                <p class="mainColor">Bienvenue ! je suis</p>
                <h1>

                    Adel Benyahia.<br />
                    Developpeur Web Junior.
                </h1>
            </div>
            <p>
                Bienvenue sur mon site, débutant dans l'univers du développement
                web, ceci est une brêve présentation de mon parcours.
            </p>
            <div>
                <a href="?page=portefolio" class="myBtn py-4 px-5 fs-3">Voir mon portefolio</a>
            </div>
        </div>
    </section>
    <section id="about">
        <h2>A propos</h2>
        <div class="row my-5">
            <div class="col-12 col-md-7">
                <p>
                    <strong class="mainColor">Passionné par le code</strong> , j'ai
                    debuter mon apprendrentissage en ligne sur mon temps libre grace à
                    de nombreux sites tel que
                    <a href="https://openclassrooms.com/courses" target="_blank"
                        class="secondaryColor fst-italic">openclassroom</a>
                    et
                    <a href="https://grafikart.fr/cursus" target="_blank"
                        class="secondaryColor fst-italic">grafikart</a>.
                </p>
                <p>
                    A 29 ans, après avoir travaillé plusieurs années dans la
                    logistique, j'ai décidé de me
                    <strong class="mainColor">reconvertir professionnellement</strong>.
                </p>
                <p>
                    Actuellement en
                    <strong class="mainColor">formation developpeur Web</strong> chez
                    <a href="https://humanbooster.com/programmes/developpeur-web-et-web-mobile/" target="_blank"
                        class="secondaryColor">HumanBooster</a>
                    afin d'acquerir des connaissances et de travailler dans l'univers
                    du web en tant que developpeur.
                </p>
            </div>
            <div id="ImageProfilWrapper" class="offset-2 col-8 col-md-4 offset-md-1">
                <img src="img/content/ImageProfil.png" alt="" />
            </div>
        </div>
    </section>
    <section id="Profil">
        <h2>Mon parcours</h2>
        <div id="Accordion" class="d-flex gap-md-5 flex-column flex-md-row">
            <div id="AccordionTab" class="d-flex flex-row">
                <ul class="d-flex flex-row flex-md-column">
                    <li class="selected">HumanBooster</li>
                    <li>Web at Heart</li>
                    <li>CCI formation</li>
                </ul>
            </div>
            <div id="AccordionContent">
                <h3>
                    Formation web developpeur/ web mobile
                    <strong class="mainColor"> @HUMAN BOOSTER </strong>
                </h3>
                <p>2022-2023</p>

                <ul>
                    <li>
                        <h4 class="mainColor">Développement front-end</h4>
                        <div>
                            Maquetter une application -<strong class="mainColor">Figma
                            </strong>
                        </div>

                        <div>
                            Réalisation d'une interface web dynamique -<strong class="mainColor">JavaScript, Angular
                            </strong>
                        </div>
                        <div>
                            Utlisation de solution de gestion de contenu (CMS) -
                            <strong class="mainColor">WordPress </strong>
                        </div>
                    </li>
                    <li>
                        <h4 class="mainColor">Développement back-end</h4>
                        <div>
                            Conception /administration de base de données -
                            <strong class="mainColor">Langage SQL</strong>
                        </div>
                        <div>
                            Développement de la partie back-end -
                            <strong class="mainColor">PHP, Symfony</strong>
                        </div>
                        <div>
                            Création de composants CMS -
                            <strong class="mainColor">Extensions Wordpre</strong>
                        </div>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    </section>
    <section id="Portefolio">
        <h2>Mes realisations</h2>
        <script type="module" src="assets/js/projects.js"></script>
        <div id="ProjectContainer"></div>
        <div class="text-center"><a href="?page=portefolio" class="myBtn">Voir tout</a></div>
    </section>
    <section id="contact" class="text-center">
        <h2>Contact</h2>
        <p>
            Actuellement en recherche de stage debut septembre <br />
            Ouvert à la discussion, n'hesiter pas dire bonjour. <br />Pour tout
            echange mon mail est a disposition ci-desous.<br />&#127850;
        </p>
        <script>
            let name = "a.benyahia69";
            let domain = "hotmail.fr";
            let subject = "subject=anti-spam";
            document.write(
                '<a href="mailto:' +
                name +
                "@" +
                domain +
                "?" +
                subject +
                '" class="myBtn">E-mail</a>'
            );
        </script>
    </section>
</main>