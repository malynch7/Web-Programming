<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="hw4.css">
    <title>Assignment 4</title>
</head>

<body>

<h1>Assignment 4</h1>
<br><br>

<h3>Part 1:</h3>
<br>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" >
    <p>
        Size:
        <select name="size">
            <option selected> 12px
            <option> 18px
            <option> 26px
        </select>
        &emsp;Font:
        <select name="font">
            <option selected> Times
            <option> Courier
            <option> Helvetica
        </select>
        &emsp;Style:
        <select name="style">
            <option selected> None
            <option> Italic
            <option> Bold
        </select>
        &emsp;Color:
        <select name="color">
            <option selected> Black
            <option> Blue
            <option> Red
        </select>
    </p>
    <p>

        <textarea name="usertext" rows="20" cols="80">
            Here is some sample text.
        </textarea>
    </p>
    <p>
        <input type="submit" value="Submit">
        <input type="reset">
</form>
<br>
<h3>Output:</h3>
<br>
<?php

    echo "<p style=\"font-size: " . $_REQUEST["size"] . "; ";
    switch($_REQUEST["style"]){
        case "Bold" : echo "font-weight: bold; "; break;
        case "Italic" : echo "font-style: italic; "; break;
        case "None" : break;
    }
    echo "font-family: ";
    switch($_REQUEST["font"]){
        case "Times" : echo "'Times New Roman';"; break;
        case "Courier" : echo "'Courier New';"; break;
        case "Helvetica" : echo "Helvetica;"; break;
    }
    echo " color: " . $_REQUEST["color"] . ";\">" . $_REQUEST["usertext"] .
        "</p>";

?>
<br><br>

<h3>Part 2:</h3>
<br>

<?php

$hours_to_show = 12;
$timestamp = time();
$clients = array ("","Bob","","Susan","John","","Carole","Sam","","","","Peggy");

function get_hour_string($time){
    return date("h:00 a", $time);
}

echo "<table id=\"event_table\"><tr><th colspan='2'>Calendar for " . date(l , $timestamp) ."<br>" . date("F d, Y h:i a", $timestamp) . "</th></tr>" . "<tr><th>
        Time</th><th>Client</th></tr>";
for($i = 0; $i < $hours_to_show; $i++){
    echo "<tr><td>" . get_hour_string($timestamp + ($i * 3600)) . "</td><td>$clients[$i]</td></tr>";
}
echo "</table>";

?>

</body>
</html>