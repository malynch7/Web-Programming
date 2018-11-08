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
        feedback.innerHTML = "That's It!"
        guessButton.innerHTML = "New Game";
        guessButton.onclick = function(){location.reload()};
    }else if(num > numberToGuess){
        feedback.innerHTML = "Guess Lower"
    }else{
        feedback.innerHTML = "Guess Higher"
    }
    remainingGuesses--;
    if(remainingGuesses <=0){
        feedback.innerHTML = "No More Guesses Remaining!"
        guessButton.innerHTML = "New Game";
        guessButton.onclick = function(){location.reload()};
    }
    document.getElementById("remainingGuesses").innerHTML = "Guesses Remaining: " + remainingGuesses;
}

//Part C

var imageGrid = [];
var firstFlipped, lastFlipped;

function partC(){
    document.getElementById("options").style.display = "none";
    var cardPairs = document.getElementById("cardPairs").value;
    var difficulty = document.getElementById("difficulty").value;

    //create card grid
    var i = 0;
    while(i < cardPairs){
        imageGrid.push(Math.floor((i + 2) / 2));
        i++;
    }
    shuffle(imageGrid);

    //display card grid
    cardGrid = document.getElementById("cardGrid");
    var j;
    for(i = 0; i < 4; i++ ){
        var row = cardGrid.insertRow();
        for(j = 0; j < 4; i++){
            var card = row.insertCell();
            card.createElement("input")
        }
    }


}
