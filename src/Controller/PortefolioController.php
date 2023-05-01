<?php

namespace Controller;

use Controller\AbstractController;

class PortefolioController extends AbstractController
{

    public function getContent(): ?array
    {
        return ['test' => 'empty'];
    }
    public function getFileName(): string
    {
        return 'portefolio';
    }
    public function getPageTitle(): string
    {
        return "Mes creations";
    }

}