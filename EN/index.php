<?php
    require_once 'Mobile_Detect.php';
    $detect = new Mobile_Detect;
     
    // Any mobile device (phones or tablets).
    if ( $detect->isMobile() ) {
        header("Location: http://www.grupopsa.com/lucky/mob/home.html");  
    } else {
    	header("Location: http://www.grupopsa.com/lucky/home.html");
    }
?>