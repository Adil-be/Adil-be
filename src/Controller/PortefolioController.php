<?php

namespace Controller;

use Controller\AbstractController;

class PortefolioController extends AbstractController
{

    public function getContent(): ?array
    {
        return ['pageTitle' => $this->getPageTitle()];
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