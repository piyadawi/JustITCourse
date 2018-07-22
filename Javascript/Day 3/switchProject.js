

function todaysTime() {
    
   // creating a variable that initalises the day and returns it in a number format.
    
    var gettingDate = new Date();
    //var _day = new Date().getDay();
    
    
    //returns the day.
    var _day = gettingDate.getDay(); 
    
    
    //returns the hours.
    var hours = gettingDate.getHours();
    
    
    //returns the minutes.
    var minutes = gettingDate.getMinutes();
    
    
    //returns the seconds.
    var seconds = gettingDate.getSeconds(); 
    
    
    var clock = "Current Time : " + hours + " : " + minutes +" : " + seconds;
    
   console.log(_day + clock);  
    
    var actualDay;
    switch(_day){
         
        case 0: actualDay = "Sunday";
        break;
            
        case 1: actualDay = "Monday";
        break;
            
        case 2: actualDay = "Tueday";
        break;
            
        case 3: actualDay = "Wednesday";
        break;
            
        case 4: actualDay = "Thuseday";
        break;
            
        case 5: actualDay = "Friday";
        break;
            
        case 6: actualDay = "Saturday";
        break;
            
            
        default: console.log("Try again,something went wrong.")
        break;   
                 
     } document.getElementById("display").innerHTML = "Today is " + actualDay + " : " + clock;
    
     
} todaysTime(); // run the fucntion

// reloads the specificed function at set intervals of 1000
setInterval(todaysTime,1000); 

//todaysTime(); // run the fucntion