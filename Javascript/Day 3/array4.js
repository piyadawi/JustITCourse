//Task4 Add to an array at a specific index point in the array

var task4Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printArray()

function printArray(){
    document.getElementById("result").innerHTML = task4Array;    
}   
//make task4Array appear on the webpage



//input line2 and button----->click to call the function
document.getElementById("buttonAdd").addEventListener('click',
     function(){
        var newInput = document.getElementById("input1").value;
        var newIndex = document.getElementById("input2").value;
    
        task4Array.splice(newIndex, 0, newInput);
        printArray();
             
    });

document.getElementById("buttonRemove").addEventListener('click',
    function(){
        var remainIndex = document.getElementById("input3").value;
    
        task4Array.splice(remainIndex, 1);
        printArray(); 
    });
                                                        
                                                        
                                                        
                                                        





