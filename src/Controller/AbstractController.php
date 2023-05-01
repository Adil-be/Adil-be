<?php
namespace Controller;

use Model\Page;
use PDO;

abstract class AbstractController
{
    protected Page $page;

    protected PDO $db;

    public function __construct(Page $page, PDO $db)
    {
        $this->db = $db;
        $this->page = $page;


    }

    public function render()
    {
        session_start();
        ob_start();
        include_once 'includes/header.php';

        include_once 'src/View/' . $this->getFileName() . '.php';

        include_once 'includes/footer.php';

        echo ob_get_clean();
    }
    abstract public function getContent();
    abstract public function getFileName(): ?string;
    abstract public function getPageTitle(): ?string;

}