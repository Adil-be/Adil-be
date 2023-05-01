<?php
namespace Service;

use Model\Page;
use Controller\HomeController;

class PagesHandler
{
    protected array $pages;

    public function __construct(array $pages)
    {
        $this->pages = $pages;
    }

    public function getCurrent(array $getData)
    {

        $page = 'home';
        if (!empty($getData['page'])) {
            $page = $getData['page'];
        }

        foreach ($this->pages as $CurrentPage) {
            if ($page == $CurrentPage->getFileName())
                return $CurrentPage;
        }
        return new Page('home', HomeController::class);
    }
}