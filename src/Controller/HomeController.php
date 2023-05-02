<?php

namespace Controller;

use Controller\AbstractController;

class HomeController extends AbstractController
{

    public function getContent(): ?array
    {
        return ['pageTitle' => $this->getPageTitle()];
    }
    public function getFileName(): string
    {
        return 'home';
    }
    public function getPageTitle(): string
    {
        return "Adel's Lab";
    }

}