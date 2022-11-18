<?php


if (isset($_GET['gate']) && isset($_GET['cmd'])) {
    $gate = $_GET['gate'];
    $command = $_GET['cmd'];

    if ($command != "status") {
        $currentStatus = file_get_contents($gate . ".status");
    
    if ($command == "open")
        file_put_contents($gate . ".status", "opened");
    if ($command == "close")
        file_put_contents($gate . ".status", "closed");
    }
    
    echo $currentStatus = file_get_contents($gate . ".status");;
    
    
}
else {
    echo "Error!";
}





?>