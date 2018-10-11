<?php

//Question 1
function isBitten(){
	if (rand(0,1) == 0){
		return true;
	}else{
		return false;
	}
}

if(isBitten() == true){
	echo "1) Charlie ate my lunch!<br>";
}else{
	echo "1) Charlie did not eat my lunch!<br>";
}

//Question 2
function checkerboard(){
	echo "<table width=\"300px\" border=\"1px\" cellpadding=\"1px\">";
	for($i = 0 ; $i < 8; $i++){
		echo "<tr>";
		for($j = 0; $j < 8; $j++){
			echo "<td width=\"35px\" height=\"35px\" ";
			if((($j + $i) % 2) == 0){
				echo "bgcolor=\"red\"></td>";
			}else{
				echo "bgcolor=\"black\"></td>";
			}
		}
		echo "</tr>";		
	}
	echo "</table>";
}

echo "<br>2)<br>";
checkerboard();

//Question 3
function arraysAndFunctions(){
	$month = array ('January', 'February', 'March', 'April','May', 'June', 'July', 
					'August','September', 'October', 'November', 'December');
	$sorted = $month;		
	sort($sorted);				
	
	echo "<br>3)<br>";
	echo "for loop:<br>";
	for($i = 0; $i < count($month); $i++){
		echo $month[$i] . ", ";
	}
	echo "<br><br>";
	for($i = 0; $i < count($sorted); $i++){
		echo $sorted[$i] . ", ";
	}
	echo "<br>";
	
	echo "<br>foreach loop:<br>";
	foreach ($month as $value){
		echo $value . ", ";
	}
	echo "<br><br>";
		foreach ($sorted as $value2){
		echo $value2 . ", ";
	}
	echo "<br>";
}
arraysAndFunctions();

//Question 4
function topRestaurants(){
	$topRestaurants = array ("Chama Gaucha" => "$40.05", "Aviva by Kameel" => "$15.00", 
							"Bone's Restaurant" => "$65.00", "Umi Sushi Buckhead" =>
							"$40.05", "Fandangles" => "$30.00", "Capital Grille" => 
							"$60.50", "Canoe" => "$35.50", "One Flew South" => "$21.00",
							"Fox Bros. BBQ" => "$15.00", "South City Kitchen Midtown"
							=> "$29.00");
	//unsorted
	echo "<br>4)<br><table><tr><th>Restaurant Name</th><th>Average Cost</th></tr>";
	foreach($topRestaurants as $name => $cost){
		echo "<tr><td>$name</td><td align=\"center\">$cost</td></tr>";
	}
	echo "</table><br><br>";
	
	//sorted by price
	asort($topRestaurants);
	echo "<table><tr><th>Restaurant Name</th><th><mark>Average Cost</mark></th></tr>";
	foreach($topRestaurants as $name => $cost){
		echo "<tr><td>$name</td><td align=\"center\">$cost</td></tr>";
	}
	echo "</table><br><br>";
	
	//sorted by name
	ksort($topRestaurants);
	echo "<table><tr><th><mark>Restaurant Name</mark></th><th>Average Cost</th></tr>";
	foreach($topRestaurants as $name => $cost){
		echo "<tr><td>$name</td><td align=\"center\">$cost</td></tr>";
	}
	echo "</table><br><br>";
}
topRestaurants();

?>

<br>
<a href="../index.html" class="center">Return to Mark Lynch's home page</a>
<br>
