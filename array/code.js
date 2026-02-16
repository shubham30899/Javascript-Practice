let obj1 = {
  "potato":"A vegetable"
}
const dict = Object.create(null);
dict["apple"] = "A fruit";

console.log(dict);          // { apple: 'A fruit' }
console.log(dict.toString); // undefined ✅
