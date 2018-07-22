//SYNTEX FOR SWICH STATEMENTS

/*switch(expression){

    case condition1: statemen
    break; 
        
    case condition2: statement
    break;
        
    case condition3: statementt
    break;   
     
    default: statement    
        
}*/


//---------------------------------------------------------------//

/*var bankBalance = 100000;

console.log("start point");

switch(bankBalance){
       
    case 0:console.log("What happened?");
    break;
        
    case 1000:console.log("Keep going");
    break;
        
    case 10000:console.log("Almost there");
    break;
        
    case 100000:console.log("Living the dream");
    break;
    
    default: console.log("None of the cases have been met");   
            
 } 

console.log("end point");*/

//---------------------------------------------------------------//


//------------------------------ARRAYS---------------------------//

//THE SYNTEX for declaring new Arrays              

// ARRAYS - A collection of things

var student = new Array("Archie", "Cian", "Henry");
// this allows you to set length before adding any items

var student = ["Student1","Student2","Student3"];
// this would be better practice

console.log(student);
//console.log(student1);



var randomDataTypes = [
    1, // number [0]
    
    false, //boolean [1]
    
    "Name",//string [2]
    
    {  // object [3]
        name: "studentName",
        _class: "JavaScript"
    
    
    }, function(_class) { //function[4]
        var greeting = "Good Morning " ;
        console.log(greeting + _class);
    }
     
 ]

console.log(randomDataTypes);


(randomDataTypes[4](randomDataTypes[3].name));




























