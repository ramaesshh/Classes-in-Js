const a = 10;
const b = 20;                 //Template litrals (It shows the exact data as we typed inside the console.log) 
const c = a+b;
console.log(`The sum of 
"a"=${a}
"b"=${b}
is
${c}`);   

console.log(this)   // this method when used like this it shows global objects


const car = {
    Name : "Rollsroyce",            //this keyword when used inside the method it refers to its owner like this.color here refers the object car
    Type : "Luxuary",
    Color : "Black",
    Year : 2019,
    Details : function(){
        console.log(`The name of the car is ${this.Name}  
The color of the car is ${this.Color}`);
    }
}

const car2 = {
    Name : "Nissan GTR",
    Type : "JDM",
    Color : "White",
    Year : 2013,
    Details : function(){
        console.log(`The name of the car is ${this.Name}
The color of the car is ${this.Color}`);
    }

}
car.Details();
car2.Details();



class Car{                                              //class .... creating class
      drive(){
        console.log("Drive the car");
      }
      brake(){
        console.log("Stop the car");
      }
}

const car3 = new Car()                                 //creating object using class
car3.drive();
car3.brake();


class Carx{
    constructor(Brand,Name,Type,Color){                    //Constructor concept
        this.Brand=Brand;
        this.Name=Name;
        this.Type=Type;
        this.Color=Color;
    }
}
const carx1 = new Carx("Toyoto","Supra","JDM","White");
const carx2 = new Carx("Nissan","Skyline","JDM","Blue");
const carx3 = new Carx("BMW","R3","Sports","Black");
console.log(carx1);
console.log(carx1.Brand);
console.log(carx1.Name);
console.log(carx1.Type);
console.log(carx1.Color);

console.log(carx2);
console.log(carx2.Brand);
console.log(carx2.Name);
console.log(carx2.Type);
console.log(carx2.Color);

console.log(carx3);
console.log(carx3.Brand);
console.log(carx3.Name);
console.log(carx3.Type);
console.log(carx3.Color);

console.log(`Color of all the cars
${carx1.Color}
${carx2.Color}
${carx3.Color}`);


let user = {

    get name(){
       return this._name;                         //getter and setter method
    },

    set name(n){
        this._name = n;                      //First the input will assign here in the n 
    }
}
user.name = "Rock";
console.log(user.name);