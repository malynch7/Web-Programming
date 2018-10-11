<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>formtest response</title>
</head>
<body>

<?php

if($_REQUEST["visitor_name"] != ""){
    $visitor_name = $_REQUEST["visitor_name"];
}else{
    $flag = true;
    echo "name is required. <br><br>";
}
if($_REQUEST["password"] != ""){
    $password = $_REQUEST["password"];
}else{
    $flag = true;
    echo "password is required. <br><br>";
}
if(isset($_REQUEST["licenseOK"])){
    $licenseOK = $_REQUEST["licenseOK"];
}else{
    $flag = true;
    echo "license conditions must be accepted. <br><br>";
}

$account_type = $_REQUEST["account_type"];
$system = $_REQUEST["system"];
$options = $_REQUEST["options"];

if(isset($_REQUEST["remarks"])){
    $remarks = $_REQUEST["remarks"];
}else{
    $flag = true;
}

if($flag == false){
    echo "Your name is $visitor_name." . " <br><br>";
    echo "You selected $account_type account. " . "<br><br>";
    echo "Your OS is $system." . "<br><br>";
    echo "Your optional features are ";
    foreach($options as $option){
        echo $option . ", ";
    }
    echo ".";
}
?>

<br>
<a href="../index.html">Return to Mark Lynch's home page</a>
<br>

</body>
</html>