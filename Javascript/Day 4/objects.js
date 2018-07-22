//Objects are a collection of properties and methods.

//SYNTAX 
//The 1st way of declaring an object

/*var students = new Object();

// The [] brackets are a an operator that takes the students object and sets the property in this case a string

students["FirstName"] = "Jeff"; // objects always have name value pair

students["Class"] = "JavaScript";

students["Grade"] = "Distinction";

students["Array"] = "Test";

console.log(students.FirstName);


// having a nested object (object within an object)
students.address = new Object();

students.address.Street = "Minories";

//students.address["Street"]=["Minories"];  testing the first way shown

students.address.DoortNumber = "17";

console.log(students);

//-------------------------------------------------------------------------------


//2nd way of declaring an object
//equivalent to new Object
var student1 = {// whenever we use {} the parser will view it as a new object}
    
    firstName: "Harry",
    secondName: "Houdini",
    
    address: {
        
        doorNumber: "150",
        streetName: "Minories",
        postCode: "EC3N 1LS",
        
        
    }
}


function greetings(){
    
    console.log("Good morning"+" "+ student1.firstName); 
    
    
}

greetings();

student1.dob = {
    
    dayOfBirth: "11",
    monthOFBirth: "April",
    yearOfBirth: "1995"
         
}

console.log(student1);


//Activity--- --------------------------------------------------------------
// Task1 Create Object with 3 properties (declare them) and display object back to the DOM

var hotelRoom = {
    
    nameOfCustomer: "Daisy",
    roomNumber: "717",
    floorNumber: "second",
}
   console.log(hotelRoom);     

var hotelRoom1 = {
    
    nameOfCustomer: "Chac",
    roomNumber: "456",
    floorNumber: "second",
}
console.log(hotelRoom1);
var hotelRoom2 = {
    
    nameOfCustomer: "Peter",
    roomNumber: "126",
    floorNumber: "first",
}
    
console.log(hotelRoom2);

function greetingC () {
    console.log("Welcome to our hotel"+" "+hotelRoom.nameOfCustomer+" ",hotelRoom1.nameOfCustomer+" ",hotelRoom2.nameOfCustomer);
    
}

greetingC ();*/
    
//---------------------------------------------------------------------------


// Task2 Crate and object and output each object property in a concatenated  string onto the webpage

/*var hotelRoom = {
    
    nameOfCustomer: "Daisy",
    roomNumber: "717",
    floorNumber: "second",
}
   console.log(hotelRoom);  


function customerString () {
    document.getElementById("hotelguest").innerHTML = ("Welcome to our hotel" + " " + hotelRoom.nameOfCustomer+"your room number is" + " " + hotelRoom.roomNumber + " " +"and on the" + hotelRoom.floorNumber+"floor");
}
customerString();*/
// Task 3 Create an object with properties and a method(function)-Acess the method(with the result in the window)   
    
/*var object3 = {
    firstName : "Piyada",
    lastName : " Wi ",
    age : "25",
    fullname: function() {
        return this.firstName + " " +this.lastName;
    },
    
    /*displayAll: function() {
        return this.firstName + " " +this.lastName+ " " + this.age +" "+ this.balance;            
   
}
    document.getElementById("result1").innerHTML = object3.fullname();

 
    
//-----------------------------------------------------------------------

/*var cars = {
    
    make: "Ferrari",
    model: "458 Italia",
    //console.log(cars);
    
    carDetail: function(){
        
       return "also Ferrari";    
        
    } 
}
     document.getElementById("result").innerHTML = "This car that I like is "+cars.carDetail();
     console.log(cars); 

//------------------------------------------------------------------------

//Task 4 create an object within an object (nested) and display the nested object property onto the webpage. 

var hobbies = {
    
    A: "playing badminton",
    B: "dancing",
    C: "cooking",
    object3
               
}
document.getElementById("result3").innerHTML = hobbies.object3.fullname(); */

//----------------------------------------------------------------------------

//Task 5 Build an object constructor
// - Create 2 instatnces of the object
// - Display the properties of the object instatnces onto the webpage

function Person(first, last, age, hair) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.hairColor = hair;
    
    this.fullname = function(){
        return this.firstName + " " + this.lastName+" " + this.age + " "+this.hairColor;
}
    console.log(this.fullname());
}

var objectone = new Person("Piyada","Wi",25,"black");
var objecttwo = new Person("Chac","Darn",23,"brown");
     
document.getElementById("result1").innerHTML =  objectone.fullname();
document.getElementById("result3").innerHTML =  objecttwo.fullname();
    

































