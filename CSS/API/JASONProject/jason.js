/*var cars = [ 
    
    { 
        "make": "Ferrari",
        "model": "458 italia",
        "price": 200000
        
    },
    
    {
        "make": "Lamborghini",
        "model": "aventador",
        "price": 300000
        
    },
        
    {
        "make": "Mclaren",
        "model": "p1",
        "price": 1000000,
        "transmission": {
            "type1": "auto",
            "type2": "manual"
        }
        
    }

]

// [0] is the position in array.
console.log(cars[0].make); 

console.log(cars[1].make);

console.log(cars[2].transmission.type1);*/

//--------------------------------------------------------------------

//The AJAX Request

// created a variable that is acting as an event listener lookin out for the ajaxThing function
var buttonListener = document.getElementById("button").addEventListener('click',ajaxThing);


function ajaxThing(){
// created a variable that stores our XMLHttpRequestObject
var ourRequest = new XMLHttpRequest();

    
// open method prepares the request. Then takes in 3 parameters which are as follows the HTTP method, the URL of the page and Boolean to indicate whether it is ascynchronous.    
ourRequest.open('GET',
   "https://raw.githubusercontent.com/piyadawi/API/master/carscollection.json", true);


    
// when the browser has recieved the loaded response from the server it will trigger the annonymous function
    ourRequest.onload= function(){
        //the function has an if statement that checks the readyState and the status of the property
        //This mean that the data is loaded and ready for us to use.
    
        if(ourRequest.readyState == 4 && ourRequest.status ==200) {
           
        // JSON.parse() processess a string containing the JSON data and coverts the JSON into a javaScript object - ready for us.
            var ourData= JSON.parse(ourRequest.responseText);
            
            
            console.log(ourData);
            
            // running a display text function whilst passing through the ourData var 
            displayText(ourData);
            
            
           
           } else {
               
        document.getElementById("error").innerHTML = "There was the error with our servers"
           
           }
           
           }  
        
// the send method is the one then sends the information to the server
    
ourRequest.send();  
    
    }


// declaring the displayText function with x being the ourData var as a parameter
function displayText(x){
    
    document.getElementById("display").innerHTML = (x[0].model)+" "+(x[0].make);
      
      
}


for(ourRequest = 0; ourRequest.length; ourRequest++){
    console.log(ourRequest);

}
    











