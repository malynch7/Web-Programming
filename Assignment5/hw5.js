//Part A
function partA(){
    var payroll = getPayroll();
    var payrollTable = document.getElementById("payrollTable");
    var i, totalPay = 0;
    for (i = 0; i < payroll.length; i++){
        var row = payrollTable.insertRow();
        var employeeNumber = row.insertCell();
        employeeNumber.innerHTML = i + 1;
        var hours = row.insertCell();
        if(payroll[i] < 600){
            hours.innerHTML = payroll[i] / 15;
        }else{
            hours.innerHTML = 40 + ((payroll[i] - 600) / 22.5);
        }
        var pay = row.insertCell();
        pay.innerHTML = "$" + payroll[i];
        totalPay += payroll[i];
    }
    var row = payrollTable.insertRow();
    var employeeNumber = row.insertCell();
    employeeNumber.innerHTML = "Total";
    var hours = row.insertCell();
    var pay = row.insertCell();
    pay.innerHTML = "$" + totalPay;
}

function getPayroll(){
    var i=0;
    var payroll = [];
    do{
        var hours = prompt("Enter hours worked for employee " + (i + 1) + ", or enter -1 to end input)");
        if(hours < 0){

        }else if (hours > 40){
            payroll[i] = 600 + ((hours - 40) * 22.5);
        }else{
            payroll[i] = hours * 15;
        }
        i++;
    }while (hours >= 0);
    return payroll;
}

//Part B
var numberToGuess, remainingGuesses;

function partB(){
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    remainingGuesses = 15;
    document.getElementById("remainingGuesses").innerHTML = "Guesses Remaining: " + remainingGuesses;
}

function guessNumber(){

    var num = document.getElementById("guessValue").value;
    var feedback = document.getElementById("feedback");
    var guessButton = document.getElementById("guessButton");
    if(num > 100 || num < 1){
        feedback.innerHTML = "Guess Is Out Of Range";
        remainingGuesses++;
    }else if(num == numberToGuess){
        feedback.innerHTML = "That's It!";
        guessButton.innerHTML = "New Game";
        guessButton.onclick = function(){location.reload()};
    }else if(num > numberToGuess){
        feedback.innerHTML = "Guess Lower";
    }else{
        feedback.innerHTML = "Guess Higher";
    }
    remainingGuesses--;
    if(remainingGuesses <=0){
        feedback.innerHTML = "No More Guesses Remaining!";
        guessButton.innerHTML = "New Game";
        guessButton.onclick = function(){location.reload()};
    }
    document.getElementById("remainingGuesses").innerHTML = "Guesses Remaining: " + remainingGuesses;
}

//Part C
var imageGrid = [];
var firstFlipped = -1, lastFlipped = -1, gridHeight = 4, gridWidth;

function partC(){
    document.getElementById("options").style.display = "none";
    var cardPairs = document.getElementById("cardPairs").value;
    var difficulty = document.getElementById("difficulty").value;

    //create card grid
    var i = 0;
    while(i < (cardPairs * 2)){
        imageGrid.push(Math.floor((i + 2) / 2));
        i++;
    }
    //shuffle
    for (i = imageGrid.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = imageGrid[i];
        imageGrid[i] = imageGrid[j];
        imageGrid[j] = temp;

    }

    //display card grid
    var cardGrid = document.getElementById("cardGrid");

    switch (cardPairs) {
        case '10': gridWidth = 5; break;
        case '12': gridWidth = 6; break;
        default: gridWidth = 4;
    }
    var j;

    for(i = 0; i < gridHeight; i++ ){
        var row = cardGrid.insertRow();
        for(j = 0; j < gridWidth; j++){
            var container = row.insertCell();

            var card = document.createElement("div");
            card.setAttribute("id", "card" + ((i * gridWidth) + j));
            card.className = "card";
            container.appendChild(card);

                var front = document.createElement("div");
                front.className = "front";
                card.appendChild(front);

                    var frontImg = document.createElement("img");
                    //frontImg.id = "frontImg" + ((i * gridWidth) + j);
                    frontImg.src = "images/" + imageGrid[(i * gridWidth) + j] + ".jpg";
                    front.appendChild(frontImg);

                var back = document.createElement("div");
                back.className = "back";
                card.appendChild(back);

                    var backImg = document.createElement("img");
                    backImg.id = "backImg" + ((i * gridWidth) + j);
                    backImg.src = "images/cardback.png";
                    backImg.setAttribute("onclick", "flipCard(" + ((i * gridWidth) + j) + ")") ;
                    back.appendChild(backImg);

        }
    }
    setTimeout(flipBack,(difficulty * 1000));
}

function flipBack(){
    var i, j;
    for(i = 0; i < gridHeight; i++ ){
        for(j = 0; j < gridWidth; j++){

            $(document).ready(function() {
                $("#card" + ((i * gridWidth) + j)).flip({
                    trigger: 'manual'
                });
                $("#card"  + ((i * gridWidth) + j)).flip(true);
            });
        }
    }
}

function flipCard(index){
    $(document).ready(function() {
        $("#card"  + index).flip(false);
    });
    if(lastFlipped == -1){
        lastFlipped = index;
    }else{
        firstFlipped = lastFlipped;
        lastFlipped = index;

        if(imageGrid[firstFlipped] != imageGrid[lastFlipped]){
            document.getElementById("instructions").innerHTML = "These do not match.";

            //render cards unselectable
            for(i = 0; i < gridHeight; i++ ){
                for(var j = 0; j < gridWidth; j++){
                    document.getElementById("backImg" + ((i * gridWidth) + j)).setAttribute("onclick", "");
                }
            }
            setTimeout(function () {
                $(document).ready(function() {

                    for(i = 0; i < gridHeight; i++ ){
                        for(var j = 0; j < gridWidth; j++){
                            document.getElementById("backImg" + ((i * gridWidth) + j)).setAttribute("onclick",
                                "flipCard(" + ((i * gridWidth) + j) + ")");
                        }
                    }
                    $("#card" + firstFlipped).flip('toggle');
                    $("#card" + lastFlipped).flip('toggle');
                    document.getElementById("instructions").innerHTML = "Match the cards by selecting 2 at a time.";
                    firstFlipped = lastFlipped = -1;
                });
            }, 2000);
        }else{
            imageGrid[firstFlipped] = -1;
            imageGrid[lastFlipped] = -1;
            document.getElementById("instructions").innerHTML = "You found a match! Select 2 more cards."
            firstFlipped = lastFlipped = -1;
        }
        var i, winFlag = true;
        for (i = 0; i < imageGrid.length; i++){
            if (imageGrid[i] != -1){
                winFlag = false;
            }
        }

        if(winFlag == true){
            document.getElementById("instructions").innerHTML = "You won! Reload the page to play again.";
        }
    }
}








