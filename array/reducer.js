// map using reduce
const arr = [1, 2, 3, 4]
const newArr = arr.reduce((acc, curr) => {
    acc.push(curr * curr)
    return acc
}, [])

// filter using reduce
const arr1 = [1, 2, 3, 4]
const newArr1 = arr.reduce((acc, curr) => {
    if (curr % 2) {
        acc.push(curr * curr)
    }
    return acc
}, [])
console.log(newArr1);

const res = [1,2,3].reduce((acc,curr) => acc+curr)
console.log(res);


// frequency counter using reduce
const str = "banana";
const freq = str.split('').reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log(freq); // { b: 1, a: 3, n: 2 }


const x = [1,2,3,4]
const [a,...b] = x
console.log(a,b,x);




