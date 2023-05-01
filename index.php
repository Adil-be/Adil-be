<?php
include 'includes/autoload.php';
include 'includes/pages.php';
include 'includes/config.inc.php';


$page = $pageHandler->getCurrent($_GET);

$controller = $page->getController();

$current = new $controller($page, $db);

$current->render();

?>