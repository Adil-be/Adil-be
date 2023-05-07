<?php

namespace Model;

class Page
{

    protected ?string $fileName;
    protected ?string $controller;

    public function __construct($pageName, $controller)
    {
        $this->fileName = $pageName;
        $this->controller = $controller;
    }


    public function getController(): ?string
    {
        return $this->controller;
    }

    public function setController(?string $controller): self
    {
        $this->controller = $controller;
        return $this;
    }
    public function getFileName(): ?string
    {
        return $this->fileName;
    }

    public function setPageName(?string $pageName): self
    {
        $this->pageName = $pageName;
        return $this;
    }
}