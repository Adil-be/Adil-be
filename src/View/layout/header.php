<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" conent="width=device-width, initial-scale=1.0" />
    <meta name="keywords"
        content="Adil B, Adel Benyahia, developpeur Web, junior, HTML, CSS, php, javascript, Angular ,Symphony,stage " />
    <meta name="description"
        content="site personnel de Adel Benyahia, developpeur web junior. Passionné par le web et Autodidact de nature j'ai créé site afin de mettre en pratique les compétences que j'ai Acquises sur le Developpement web" />
    <meta property="og:image" content="assets/img/content/Logo-dark.png" />
    <link rel="shortcut icon" type="image/svg" href="assets/img/content/Logo-cyan.svg" />
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/bootstrap-icons.css" />
    <link rel="stylesheet" href="assets/css/style.css" />

    <title>
        <?= $pageTitle ?>
    </title>
</head>

<body>
    <header class="d-flex align-items-center">
        <div class="d-flex justify-content-between align-items-center MyContainer">
            <div class="d-flex align-items-center gap-3 logo">
                <a href="index.php"><img src="assets/img/content/Logo.svg" alt="" /></a>
                <span>- Adel's Lab</span>
            </div>
            <nav id="navDesktop" class="navDesktop d-lg-flex align-items-center ali">
                <ul class="d-flex align-items-center mx-5 my-0 p-0">
                    <li><a href="?#about">About</a></li>
                    <li><a href="?#Profil">Profil</a></li>
                    <li><a href="?page=portefolio">Portefolio</a></li>
                </ul>
                <a href="#contact" class="myBtn">me contacter</a>
            </nav>
            <div class="navMobileContainer">
                <nav id="navMobile" class="navMobile d-flex align-item-center flex-column gap-5 justify-content-center">
                    <ul class="d-flex gap-5 flex-column align-item-center">
                        <li class="p-4"><a class="p-4" href="?#about">About</a></li>
                        <li class="p-4"><a class="p-4" href="?#Profil">Profil</a></li>
                        <li class="p-4"><a class="p-4" href="?page=portefolio">Portefolio</a></li>

                        <!-- <li class="p-4"><a href="?#about">About</a></li>
                        <li class="p-4"><a href="?#Profil">Profil</a></li>
                        <li class="p-4"><a href="?page=portefolio">Portefolio</a></li> -->
                    </ul>
                    <a href="#contact" class="myBtn">me contacter</a>
                </nav>
            </div>
            <div id="burger" class="">
                <span></span>
            </div>
        </div>
    </header>