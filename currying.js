// using function expression
const sum = function(a){
    return function(b){
        return a+b;
    }
}

cl = sum(5)(6)
console.log(cl);

// using arrow function
const sum1 = (a) => {
    return (b) => {
        return a+b;
    }
}

cl = sum1(5)(6)
console.log(cl);


// currying function example
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example usage
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); 

