//Task 6 Create an array of Countries England, France, Italy, Mexico, 
//Poland, Russia, China, Greece, Egypt, India
//Create a  user text input field. User can enter a country. The array is searched and when a match is found the position in the array //is displayed and the user is given a message to inform whether the country is present or not in the array.

var countries = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];

document.getElementById("myBtn1").addEventListener('click', arrayTask6);

function arrayTask6(){
    document.getElementById("myarray").innerHTML = countries;
}
    


document.getElementById("mybee").addEventListener('click', search6);

function search6(){
    var input6 = document.getElementById("guess").value;
    input6 = input6.toLowerCase(); /*avoid users use lowercase*/
    input6 = (input6.charAt(0).toLocaleUpperCase() + input6.slice(1));
    
    
    if(countries.includes(input6)){
       document.getElementById("myarray4").innerHTML = input6 +" is alredy present";
        
    } else { document.getElementById("myarray5").innerHTML = input6 +" is not present";
        
        
    }  
    
}
 

    


    