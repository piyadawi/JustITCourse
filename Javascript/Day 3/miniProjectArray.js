var nameList = [];

function printArray(){
    document.getElementById("contestants").innerHTML = nameList;
    console.log(nameList);
}   
printArray();

document.getElementById("button1").addEventListener('click', addName);
function addName() {
    var newInput = document.getElementById("input1").value;
    nameList.push(newInput);
    printArray();
}

document.getElementById("button2").addEventListener('click', selectWinner);
function selectWinner() {
    var position = Math.floor(Math.random() * nameList.length);
    var winner = "The winner is " + nameList[position];
    document.getElementById("winner").innerHTML = winner; 
}