const genFunc = function *(){
    yield 1;
    yield 2
}

const generator = genFunc();
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// console.log(generator);


// for(let o of generator){
//     console.log(o);
    
// }

// return terminates the function
// console.log(generator.next())
// console.log(generator.return())
// console.log(generator.next())



function* gen(){
    try{
        yield "one"
        yield "two"
    }finally{
        yield "finally"
    }
}

const func = gen()
console.log(func.next())
console.log(func.return())
