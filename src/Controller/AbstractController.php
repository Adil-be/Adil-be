<?php
namespace Controller;

use Model\Page;
use PDO;

abstract class AbstractController
{
    protected Page $page;

    protected ?PDO $db;

    public function __construct(Page $page, PDO $db = null)
    {
        $this->db = $db;
        $this->page = $page;


    }

    public function render()
    {
        session_start();
        ob_start();

        $param = $this->getContent();
        extract($param);

        include_once 'src/View/layout/header.php';

        include_once 'src/View/' . $this->getFileName() . '.php';

        include_once 'src/View/layout/footer.php';

        echo ob_get_clean();
    }
    abstract public function getContent(): ?array;
    abstract public function getFileName(): ?string;
    abstract public function getPageTitle(): ?string;

}