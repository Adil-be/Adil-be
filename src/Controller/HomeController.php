<?php

namespace Controller;

use Controller\AbstractController;

class HomeController extends AbstractController
{

    public function getContent(): array
    {
        return ['test' => 'empty'];
    }
    public function getFileName(): string
    {
        return 'home';
    }
    public function getPageTitle(): string
    {
        return "adel's Lab";
    }

}