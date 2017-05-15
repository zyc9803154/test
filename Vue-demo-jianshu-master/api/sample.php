<?php
header('Access-Control-Allow-Origin:*');
require_once "jssdk.php";
$jssdk = new JSSDK("wxefc883e2f27e2d5a", "5a14ffc29d790e6ff69b344d3b790b29");
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);
?>
