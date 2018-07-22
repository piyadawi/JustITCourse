//task2 Collect a user input and allocate it to a new array using the push method.
//Display the array and the length of the array (number of elements) using array.length on the webpage

var task1Array = [];
var inputButton = document.getElementById("userButton").addEventListener('click', taskTwo);

function taskTwo(){
    task1Array[0] = document.getElementById("input1").value; 
    
    
    document.getElementById("result").innerHTML=task1Array[0];
    document.getElementById("lengthcounter").innerHTML=(task1Array.length); 
}