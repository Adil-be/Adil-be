<?php
use Controller\HomeController;
use Controller\PortefolioController;
use Model\Page;
use Service\PagesHandler;

$pageHandler = new PagesHandler([
    new Page('home', HomeController::class),
    new Page('portefolio', PortefolioController::class),
]);