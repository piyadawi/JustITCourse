//task 5 Create an array variable with 10 elements and using a for loop  display each element on the webpage

/*var buttontask5 = document.getElementById("buttonLoop").addEventListener('click', function(){

    var message; ""
    for (i=0; i<task5Array.length; i++){  /*length used to iteratae through each element without worrying about the length
        message = message + task5Array[i];
        //message += task5Array[i];
      
    } document.getElementById("myarray").innerHTMl = message;
    
    }   
*/

var taskArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function looparray() {
    var message="";
    for (i=0; i<taskArray.length; i++) {
      message = message + " " + taskArray[i];
    }
document.getElementById("myarray").innerHTML = message
}