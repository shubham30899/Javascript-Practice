'use strict';

function Circle (radius){  
  this.radius = radius;
  this.draw = function(){
    console.log(`This is a circle with radius ${this.radius}`);
    
  }
}
const circle1 = new Circle(3)


const anotherCircle = new Function('radius',`
  this.radius = radius;
  this.draw = function(){
    console.log('This is a circle with radius');
    
  }`)

const circle2 = new anotherCircle(1)

console.log(circle2, circle2.radius);

