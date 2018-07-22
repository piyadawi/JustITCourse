// SYNTEX FORLOOP
//for(initialisation; test condition; iteration statment){
    
// Statement to be executed if the test condition is true  
    
//  }


/*var cars;

console.log("The beginning of the for loop");
// for loop is to be used when the user is aware of the number of iterations.

for(cars=0; cars<10; cars++){
    
    console.log("Current number of car" + cars);    
    
}
  
//Task1.Create a function that contains a For Loop that loops through from 1 to 50 and displaying the number onto the website.


var university;
for(university=1; university<51; university++){
    
    document.write("This is the university in the uk." + university);
       
    
}
*/


//Task 2.Create the function that contains a For Loop that loops through from 1 to 20 and for each iteration check if the number is odd or even.


/*for(i=1; i<=20; i++){
    
    document.write(i);
    
    if ((i%2)==0){
    document.write("This is even number,   ")
}
    else document.write("This is odd number,   ")
}
*/
/*-------------------------------------------*/

/*function numbersLoop(){
    
    for(cars=0; cars<=50; cars++){
       
        document.getElementById("result").innerHTML += cars + ",";  
        
    }
    
      
}

numbersLoop();

/*------------------------------------------*/

/*// IF Statement Syntex

1. If
if(condition){
    
    code to be executed if the condition is true 
   
   }
-----------------------------------------------------
    
2.  If else  
if(condition){
    
    code to be executed if the condition is true 
   
   }
else{ 
    code to be executed if the condition is false
}

------------------------------------------------------
   
 3.If ,else ,elseif   
    if(condition){
    
    code to be executed if the condition is true 
   
   }

else if(condition2){ 
    code to be executed if the condition is true
}
else if(condition3){ 
    code to be executed if the condition is true
}
else { 
    code to be executed if the condition is false
}

------------------------------------------------------*/

/*var doorNumber = 12;
if (doorNumber > 12){
    
    console.log("If statement is true")

    }
else{
    console.log("If statement is false")
}

/*-----------------------------------------------------*/

//Task 3 Collect user input and display on the webpage if the number is less than10, more than 10 or a negative


/*
document.getElementById("userButton").addEventListener('click',_number);
    

function _number(){
    var userInput=document.getElementById("numberInput").value; 
    userInput = parseInt(userInput);
    
    var mystring ="";
    if (userInput < 10){
        
        mystring = "Your number is less than 10";
        
    }
    
    else if(userInput > 10){
        mystring = "Your number is more than 10";
        
    }
    
    else if(userInput < 0){
        mystring  = "Your number is negative";
        
    }
    else {
        mystring ="This number is undefined.";
        
    }
    document.getElementById("numberInsult").innerHTML = mystring;
    
    
}
    
*/


//Task 4 Collect 2 numbers from the user and display on the webpage if one or both of them are greater than 10

/*document.getElementById("userButton").addEventListener('click',twoNumber);

function twoNumber(){
    var userInput=document.getElementById("theFirstNumber").value; 
    userInput = parseInt(userInput);
    var userInput2=document.getElementById("SecondNumber").value; 
    userInput = parseInt(userInput);
    
    var theFirstNumber 
    if (userInput > 10){
        document.getElementById("twoNumberInsult").innerHTML = "numberA is greater than 10";
        
    }
    else if (userInput < 10){
        document.getElementById("twoNumberInsult").innerHTML = "numberA is less than 10";
        
    }  
    
    if (userInput2 > 10){
        document.getElementById("twoNumberInsult").innerHTML = "numberB is greater than 10";
    }
    
    
    else if (userInput2< 10){
        document.getElementById("twoNumberInsult").innerHTML = "numberB is less than 10";
    }
    
    else {
        document.getElementById("twoNumberInsult").innerHTML = "This number is undefined";
        
           
    }
}*/

//Task 5  Create a nested loop that display 2 sequences of numbers from 1-10, with one sequence nested inside the other.

/*var stringone = "";
for (i = 1 ; i>=2 ; i++){
    
    for (j = 1; i>=10 ; j++)
    console.log("stringone" + i);  
        
}




/*while(condition){
    statement that runs if the condition is true  
}

//When the number of iteration is unknown*/

/*----------------------------------------------------*/
/*var houses = 0;
while(houses<10){
      
      console.log("Current number of houses" + houses);
      
   // houses++;
      
      }
      
console.log("End point of loop")/*
*/

/*-----------------------------------------------------*/
//SYNTEX FOR DO WHILE LOOP

/*do{

statment/ code to be executed
} while(condition)
*/

/*var houses = 0;
console.log("Start of the do while loop");
do{
    
    console.log("Current number of houses" + houses);
    houses++;
    
}while(houses<10);

    console.log("End point of the loop");*/

//Task 7 Create do while loop that displays number 1-10 onto the webpage.








