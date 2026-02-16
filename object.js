function Circle(radius){
    this.radius = radius
    let defaultLocation = true;
    let area = 40
    this.draw = function (){
        console.log("draw");   
    }

    // getters and setters
    Object.defineProperty(this, 'area',{
        get:function(){
            return area
        },
         set:function(value){
            area = value
        }
    })
}
Circle.prototype.test = function(){
    console.log("test");
}
const circle = new Circle(1)
circle.radius = 3;
// const x = circle.radius;
circle.defaultLocation = false
circle.area = 80

circle.test();
console.log(Circle);





// for (let key in circle){
//     console.log("key",key);
//     if('radius' in circle){
//         console.log("Yes radius is present");  
//     }   
// }
