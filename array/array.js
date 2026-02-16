let arr = ["Shubham","Pankaj","Vikas"]
// in returns index
for (let item in arr){
    console.log(item);
    
}
// of returns value
for (let item of arr){
    console.log(item);
    
}
// Break and Return cannot be used with forEach
// arr.forEach((item,index) => {
//     console.log(item, index);
//     if(index == 1){
//         break;
//     }
    
// })