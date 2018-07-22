//Task1 Collect 3 user inputs and allocate them to three members of a new array. Display the array on the webpage.

var task1Array = [];
var inputButton = document.getElementById("task1Button").addEventListener('click', taskone);

function taskone(){
    task1Array[0] = document.getElementById("input1").value;
    task1Array[1] = document.getElementById("input2").value;
    task1Array[2] = document.getElementById("input3").value;

document.getElementById("arrayresult").innerHTML=task1Array[0];
document.getElementById("arrayresult1").innerHTML=task1Array[1];
document.getElementById("arrayresult2").innerHTML=task1Array[2];   
    
    
}





