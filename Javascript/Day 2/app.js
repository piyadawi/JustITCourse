//SYNTAX PARSER - SOMETHING THAT READS AND TRANSLATES YOUR COAD -

/*console.log("Web page is linked"); // checking the console to see if the website is linked.

var nameOfVariable; // declaring our variable

nameOfVariable = "Hello"; // initialising 
// the data type is assigning

var test = "Hello"; // better practice

console.log(test);

test = "Bye";

console.log(test);

// avoid naming convent with keywords.
// avoid naming with the same name.
// do not start with numbers.

/*Data types - 
numbers
boolean
string 
underfined
object 
null */

//---------------Function---------------//
// declares the function 

/*function nameOfFunction() {
    
    var text; // This ia a local variable
    // can carry the same name as the global without conflict.
    
    text="This is javaScript week" 
    
    console.log(text);
}


nameOfFunction(); // runs our function


//alert("Hello my name is Piyada");

//window.alert("");----------------->can be also use this syntex.

function basicArithmatic() {
    
    var num1 = 428
    var num2 = 500
    var num3 = (num2 + num1*3%5);
    console.log(num3);    
    
}

basicArithmatic();

//------------------------------------------------------

//linked js with HTML 
/*var userButton = document.getElementById("userButton").addEventListener('click',addSums);

function addSums(){
    
    console.log("function is working!");
    
    var userInput =
    document.getElementById("ourUserInput").value;
    
    console.log(userInput);
    
    document.getElementById("displayResult").innerHTML = userInput;
      
}

//-------------------------------------------------------

var userButtonsecond = 
    document.getElementById("seconduserButton").addEventListener('click',Piyada);

    function Piyada(){
        
        //.value for installed but doesn't make anything change with the click button 
        var userInput1=parseInt(document.getElementById("ourUserInput").value);
        
        var userInput2=parseInt(document.getElementById("secondUserInput").value);
        
        
        var userInput3=parseInt(document.getElementById("thirdUserInput").value);
        
        
        //Our task is (a+b+c)*c and (a+b+c)
        // using (a+b+c)*c first
        var firstSum = (userInput1+userInput2+userInput3)*userInput3;
        
        console.log(firstSum);
        
        //then(a+b+c)
        var secondsum =
        userInput1+userInput2+userInput3;
        
        
        //send back to the HTML to show the answer
        document.getElementById("displayResult").innerHTML=firstSum - secondsum; alert (userInput3);
        
        
    }


//1.Accept user input from the webpage and display it in an alert message using a function

 

    
//---------------------------------------------------

//2.Create a function that accepts 3 variables being passed into it, adds them up and returns the sum.Display the same back to the DOM//


document.getElementById("displayResult").innerHTML=thirdUserInput, alert (userInput1+userInput2+userInput3);*/

//--------------------------------------------------

//3.Scop: declare the same variable inside the function (local) and outside (global), giving it different values. display the two values.//

/*var p = 3 ;

function piyada(){
    var p = 7;

    console.log(p);
    console.log(this.p);
    
}
piyada();*/

//-------------------------------------------------------


//5.Collect 2 user inputs and display in text whether they are the same or different.//

/*var _eventListener = 
    document.getElementById("button5").addEventListener('click',sameOrDiff);

 
function sameOrDiff () {
    var input1= document.getElementById"input1".value;
    var input2= document.getElementById"input2".value;
    var aor;
    
if (input1 === input2) {
    aor ="This is the same value."
}
else {aor="This is not the same value."}
     
       
document.getElementById("sameOrDiff").innerHTML=aor;  
    
     
} */
//---------------------------------------------------

/*var dateOfBirth = document.getElementById("dobButton").addEventListener("Enter",currentAge);

function currentAge() {
    var today = new Date();
    var birthday = document.getElementById("dobInput").value;
    // var birthday = new Date('Apr 16, 1996 15:45:55'); hardcoded value for testing
    var difference = today.getTime() - birthday.getTime();
    difference = Math.round(difference / 31556900000);
    console.log("You are " + difference + " years old")
}
document.getElementById("dobDisplay").innerHTML= difference;


function futureAge() {
    var birthday = document.getElementById("dobInput2").value;
    var futureDate = document.getElementById("futureDateInput").value;
    var difference = futureDate.getTime() - birthday.getTime();
    if (difference > 0 ) {
        difference = Math.round(difference / 31556900000);
        console.log("You will be " + difference + " years old")
    } else {
        console.log("Invalid date entered")
    }
}
document.getElementById("dobDisplay2") .innerHTML=   */

    
    
    
    
    
/*-------------------------------------------------------------------*/
// SYNTEX FORLOOP
//for(initialisation; test condition; iteration statment){
    
// Statement to be executed if the test condition is true  
    
//  }


var cars;

console.log("The beginning of the for loop");
// for loop is to be used when the user is aware of the number of iterations.

for(cars=0; cars<10; cars++){
    
    console.log("Current number of car" + cars);    
    
}



























