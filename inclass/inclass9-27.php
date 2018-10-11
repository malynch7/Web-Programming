<?php


function q1(){
	return "<p><i>\"Good morning, Dave,\" said HAL.</i></p>";
}
echo "1) " . q1() . "<br>";

function q2($radius){
	return ( pow($radius,2) * pi());
}
echo "2) " . q2(1) . "<br>";

function q3($celFahr){
	return ((5/9) * ($celFahr - 32));
}
echo "3) " . q3(32) . "<br>";

function q4(){
	$str = " PHP is fun ";
	return "String has " . strlen(trim($str));
}
echo "4) " . q4() . "<br>";

function q5($str2){
	  $position = strpos($str2, "WWW") + 3;
	  return substr($str2, $position, 1);
	  
}
echo "5) " . q5("WDWWLWWWLDDWDLL") . "<br>";

function q6($str3){
	$str3 = strtolower($str3);
	if(strcmp($str3, strrev($str3)) == 0){
		return $str3 . " is a palindrome";
	}else{
		return $str3 . " is not a palindrome";
	}
}
echo "6) " . q6("kayak") . "<br>";

function q7(){
	$num = 7;
	if(($num % 2) == 0){
		return $num . " is even";
	}else{
		return $num . " is odd";
	}
}
echo "7) " . q7() . "<br>";

function q8(){
	if((date("Y") % 4) == 0){
		return "It is a leap year.";
	}else{
		return "It is not a leap year.";
	}
}
echo "8) " . q8() . "<br>";
?>

<br>
<a href="../index.html">Return to Mark Lynch's home page</a>
<br>
