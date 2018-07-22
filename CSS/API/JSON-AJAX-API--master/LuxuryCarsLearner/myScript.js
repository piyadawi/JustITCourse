/* ----------------------------------------------------------------------------------------
	THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */

var getManufacturer = document.getElementById("manufacturer").value;

// returns the index for the selected option in numerical terms.
//var manufacturerID =
 //   getManufacturer.options[getManufacturer.selectIndex].value;
// created a var that litens for change on our drop down menu.
var buttonListener = 
    document.addEventListener('change',happyDays);

var ourRequest = new XMLHttpRequest();
function happyDays(){
    
//    console.log(getManufacturer.selectIndex);
    
    //manufacturerID =
    
   ourRequest.open('GET', "https://raw.githubusercontent.com/Auwais/JSON-AJAX-API-/master/LuxuryCarsLearner/expensiveLuxuryCars.json", true);
    
   ourRequest.onload = function(){
       
       if (ourRequest.readyState == 4 && ourRequest.status == 200) {
           
           var myData = JSON.parse(ourRequest.responseText);
        
           
           
           writeText(myData);
           
       } else{
           
            document.getElementById("messageAlert").innerHTML = "server issues, we are very sorry";
            
       }
       
       
             
   }


    
     ourRequest.send();
    
}

function writeText(a) {
    
    var manufacturerID = getManufacturer.value;
    
    document.getElementById("manufacturerC").innerHTML = a.data[manufacturerID].manufacturer;
    
    document.getElementById("imgC").innerHTML = a.data[manufacturerID].img;
    
    document.getElementById("priceC").innerHTML = a.data[manufacturerID].price;
    
    
    } 
    
//----------------------------------------------------------------------------


   
      









