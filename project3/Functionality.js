
           var IncrementMain=0;
           var finalNumber=0;
           var gridDimension;
           var IntoString="";
           var PreSelected1=0;
           var PreSelected2=0;
           var PreSelected3=0;
           var PreSelected4=0;
           var PreSelected5=0;
            $(document).ready(function() {
                  grid(10,10);
                  stay();
                });

            $("#button1").click(function(){
                  var option1 = document.getElementById("Options");

                  var strUser = option1.options[option1.selectedIndex].value;
                  var theNumber=" ";
                    for(var i=0;i<2;i++){
                        theNumber = theNumber + strUser.charAt(i);
                    }
                    StrToInt = parseInt(theNumber);
                  grid(StrToInt, StrToInt);
                  stay();
                });
              function stay(){

                    $('td').click(function() {
                        if ($(this).hasClass('HighLight'))
                            $(this).removeClass('HighLight');
                        else
                            $(this).addClass('HighLight');
                    });
              }
                function grid(rows, cols) {
                  gridDimension = rows;
                  generation = 0;
                  document.getElementById("generation").innerHTML = "Generation: 0";
                  finalNumber=0;
                  var StrToInt = 0;
                  IncrementMain=0;
                  var table = "<table>";
                  var size = (1 / rows * 525) + "px";

                  for (i=0; i<rows; i++) {
                    table += "<tr>";
                    for (j=0; j<cols; j++) {
                      var IntoString = IncrementMain.toString();
                      table += "<td id="+IntoString+">"+"</td>";
                      IncrementMain++;
                    }
                    table += "</tr>";
                  }
                  table += "</table>";
                  $("#container").empty().append(table);
                  $("tr").css("height", size);
                  $("td").css("color", "red").css("width", size);
                  if(rows==10 && cols==10){
                  $("#44").addClass('HighLight');
                  $("#55").addClass('HighLight');
                  $("#63").addClass('HighLight');
                  $("#64").addClass('HighLight');
                  $("#65").addClass('HighLight');
                }
                  if(rows==15 && cols==15){
                    $("#96").addClass('HighLight');
                    $("#112").addClass('HighLight');
                    $("#127").addClass('HighLight');
                    $("#126").addClass('HighLight');
                    $("#125").addClass('HighLight');
                  }
                  if(rows==20 && cols==20){
                    $("#208").addClass('HighLight');
                    $("#209").addClass('HighLight');
                    $("#169").addClass('HighLight');
                    $("#190").addClass('HighLight');
                    $("#210").addClass('HighLight');
                  }
                  if(rows==25 && cols==25){
                    $("#286").addClass('HighLight');
                    $("#336").addClass('HighLight');
                    $("#312").addClass('HighLight');
                    $("#337").addClass('HighLight');
                    $("#335").addClass('HighLight');
                  }
                  if(rows==30 && cols==30){
                    $("#434").addClass('HighLight');
                    $("#465").addClass('HighLight');
                    $("#495").addClass('HighLight');
                    $("#494").addClass('HighLight');
                    $("#493").addClass('HighLight');
                  }
                  if(rows==35 && cols==35){
                    $("#4").addClass('HighLight');
                    $("#451").addClass('HighLight');
                    $("#481").addClass('HighLight');
                    $("#126").addClass('HighLight');
                    $("#125").addClass('HighLight');
                  }
                }
           $("#button5").click(function () {
            clearState()
               if (gridDimension == 10) {
                   $("#54").addClass('HighLight');
                   $("#55").addClass('HighLight');
                   $("#44").addClass('HighLight');
                   $("#45").addClass('HighLight');
               }
               if (gridDimension == 15) {
                   $("#97").addClass('HighLight');
                   $("#98").addClass('HighLight');
                   $("#113").addClass('HighLight');
                   $("#112").addClass('HighLight');
               }
               if (gridDimension == 20) {
                   $("#190").addClass('HighLight');
                   $("#210").addClass('HighLight');
                   $("#189").addClass('HighLight');
                   $("#209").addClass('HighLight');
               }
               if (gridDimension == 25) {
                   $("#261").addClass('HighLight');
                   $("#262").addClass('HighLight');
                   $("#286").addClass('HighLight');
                   $("#287").addClass('HighLight');
               }
               if (gridDimension == 30) {
                   $("#465").addClass('HighLight');
                   $("#495").addClass('HighLight');
                   $("#494").addClass('HighLight');
                   $("#464").addClass('HighLight');
               }
           });
                $("#button6").click(function(){
                    clearState()
                    if (gridDimension == 10) {
                        $("#54").addClass('HighLight');
                        $("#55").addClass('HighLight');
                        $("#53").addClass('HighLight');
                    }
                    if (gridDimension == 15) {
                        $("#97").addClass('HighLight');
                        $("#98").addClass('HighLight');
                        $("#96").addClass('HighLight');
                    }
                    if (gridDimension == 20) {
                        $("#190").addClass('HighLight');
                        $("#188").addClass('HighLight');
                        $("#189").addClass('HighLight');
                    }
                    if (gridDimension == 25) {
                        $("#261").addClass('HighLight');
                        $("#262").addClass('HighLight');
                        $("#260").addClass('HighLight');
                    }
                    if (gridDimension == 30) {
                        $("#493").addClass('HighLight');
                        $("#495").addClass('HighLight');
                        $("#494").addClass('HighLight');
                    }
                });
                $("#button7").click(function(){
                    clearState()
                    if (gridDimension == 10) {
                        $("#54").addClass('HighLight');
                        $("#55").addClass('HighLight');
                        $("#44").addClass('HighLight');
                        $("#45").addClass('HighLight');
                        $("#53").addClass('HighLight');
                        $("#46").addClass('HighLight');
                    }
                    if (gridDimension == 15) {
                        $("#97").addClass('HighLight');
                        $("#98").addClass('HighLight');
                        $("#113").addClass('HighLight');
                        $("#112").addClass('HighLight');
                        $("#111").addClass('HighLight');
                        $("#99").addClass('HighLight');
                    }
                    if (gridDimension == 20) {
                        $("#190").addClass('HighLight');
                        $("#210").addClass('HighLight');
                        $("#189").addClass('HighLight');
                        $("#209").addClass('HighLight');
                        $("#191").addClass('HighLight');
                        $("#208").addClass('HighLight');
                    }
                    if (gridDimension == 25) {
                        $("#261").addClass('HighLight');
                        $("#262").addClass('HighLight');
                        $("#286").addClass('HighLight');
                        $("#287").addClass('HighLight');
                        $("#263").addClass('HighLight');
                        $("#285").addClass('HighLight');
                    }
                    if (gridDimension == 30) {
                        $("#465").addClass('HighLight');
                        $("#495").addClass('HighLight');
                        $("#494").addClass('HighLight');
                        $("#464").addClass('HighLight');
                        $("#466").addClass('HighLight');
                        $("#493").addClass('HighLight');
                    }
                });
                $("#button8").click(function(){
                  });


// game logic

var generation = 0;
var currentState = [];
var nextState = [];

// test param
// currentState = [[0,0,1],[1,1,1],[0,0,0]];

function increment(numOfIterations){

    loadCurrentState();

    while (numOfIterations > 0){

        nextState = JSON.parse(JSON.stringify(currentState));

        for (var i = 0; i < currentState.length; i++){
            for ( var j = 0; j< currentState[i].length; j++){

                // find number of living neighbors
                var neighbors = 0;
                //check above
                if (i !== 0){
                    if(currentState[i-1][j] === 1){
                        neighbors++;
                    }
                    if (j !== 0 && currentState[i-1][j-1] === 1){
                            neighbors++;
                    }
                    if(j !== (currentState[i-1].length - 1) && currentState[i-1][j+1] === 1){
                        neighbors++;
                    }
                }
                // check beside
                if (j !== 0 && currentState[i][j-1] === 1){
                        neighbors++;
                }
                if(j !== (currentState[i].length - 1) && currentState[i][j+1] === 1){
                        neighbors++;
                }
                // check below
                if (i !== currentState.length - 1){
                    if(currentState[i+1][j] === 1){
                        neighbors++;
                    }
                    if (j !== 0 && currentState[i+1][j-1] === 1){
                            neighbors++;
                    }
                    if(j !== (currentState[i+1].length - 1) && currentState[i+1][j+1] === 1){
                            neighbors++;
                    }
                }

                // apply rules
                // rule 1 & 6
                if(currentState[i][j] === 1 && neighbors < 2){
                    nextState[i][j] = 0;
                }
                // rule 2 & 7
                if(currentState[i][j] === 1 && neighbors > 3){
                    nextState[i][j] = 0;
                }
                // rule 3 & 8
                    // implicit - require no state change
                // rule 4 & 5
                if(currentState[i][j] === 0 && neighbors === 3){
                    nextState[i][j] = 1;
                }
            }
        }
        currentState = JSON.parse(JSON.stringify(nextState));
        numOfIterations--;
        generation++;
        document.getElementById("generation").innerHTML = "Generation: " + generation;
    }
    unloadCurrentState();

}

function loadCurrentState(){
// display to currentState[][]
   var tmpArray = [];

   for (var i = 0; i < gridDimension; i++ ){
       tmpArray[i] = [];
       for(var j = 0; j < gridDimension; j++){
           if($("#" + (i*gridDimension + j)).hasClass('HighLight')){
               tmpArray[i][j] = 1;
           }else{
               tmpArray[i][j] = 0;
           }
       }
   }
   currentState = JSON.parse(JSON.stringify(tmpArray));
}

function unloadCurrentState() {
// currentState[][] to display
   for (var i = 0; i < gridDimension; i++ ){
       for(var j = 0; j < gridDimension; j++){

           if(currentState[i][j] === 1 && !($("#" + (i*gridDimension + j)).hasClass('HighLight'))){
               $("#" + (i*gridDimension + j)).addClass('HighLight');
           }else if(currentState[i][j] === 0 && $("#" + (i*gridDimension + j)).hasClass('HighLight')){
               $("#" + (i*gridDimension + j)).removeClass('HighLight');
           }
       }
   }
}

var interval = null;
function incrementEvery(seconds){
// implementation for possible "play" button
    interval = setInterval(increment,(seconds * 1000), 1);

    var btn = document.getElementById("start");
    btn.innerHTML = "Stop";
    btn.setAttribute("onclick","incrementStop()");
    document.getElementById("button1").disabled = true;
    document.getElementById("increment1").disabled = true;
    document.getElementById("increment23").disabled = true;
    document.getElementById("clear").disabled = true;
    document.getElementById("button5").disabled = true;
    document.getElementById("button6").disabled = true;
    document.getElementById("button7").disabled = true;
    document.getElementById("button8").disabled = true;
}


function incrementStop(){
// implementation for corresponding "stop" button
    clearInterval(interval);

    var btn = document.getElementById("start");
    btn.innerHTML = "Start";
    btn.setAttribute("onclick","incrementEvery(0.5)");
    document.getElementById("button1").disabled = false;
    document.getElementById("increment1").disabled = false;
    document.getElementById("increment23").disabled = false;
    document.getElementById("clear").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
}

function increment23(seconds){
    incrementEvery(seconds);
    setTimeout(incrementStop, (seconds * 23000) + 10);
}

function clearState(){
    generation = 0;
    document.getElementById("generation").innerHTML = "Generation: 0";
    for (var i = 0; i < gridDimension; i++ ){
        for(var j = 0; j < gridDimension; j++){
            if($("#" + (i*gridDimension + j)).hasClass('HighLight')){
                $("#" + (i*gridDimension + j)).removeClass('HighLight');
            }
        }
    }
}

// unimplemented functionality

function toggle(i, j){
// Possible onclick function that needs a method for deriving cell id, as per naming scheme.
   if(currentState[i][j] === 0){
       currentState[i][j] = 1;
       document.getElementById( /*cell id here*/ ).setAttribute("class","Highlight");
   }else{
       currentState[i][j] = 0;
       document.getElementById( /*cell id here*/ ).removeAttribute("class");
   }
}

