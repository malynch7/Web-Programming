<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="hw4.css.css">
    <title>Assignment 4</title>
</head>

<body>

<h1>Assignment 4</h1>
<br><br>

// Part 1

<h3>Part 1:</h3>
<form method="post" action="hw4.php" >
    <p>
        Font:
        <select name="font">
            <option selected> Times
            <option> Courier
            <option> Helvetica
        </select>
    </p>
    <p>
        Style:
        <select name="style">
            <option selected> None
            <option> Italic
            <option> bold
        </select>
    </p>
    <p>
        Color:
        <select name="color">
            <option selected> Black
            <option> Blue
            <option> Red
        </select>
    </p>
    <p>
        Size:
        <select name="size">
            <option selected> Black
            <option> Blue
            <option> Red
        </select>
    </p>
    <p>

        <textarea name="usertext" rows="20" cols="80">
            Some sample text.
        </textarea>
    </p>
    <p>
        <input type="submit" value="Submit">
        <input type="reset">
</form>

<p style="font-family: "
<?php

    echo "<p style=\"font-family:";
    switch($_REQUEST["font"]){
        case ""
    }

?>


</body>
</html>