Promise.all([
  Promise.resolve("Task 1 Done"),
  Promise.resolve("Task 2 Done"),
  Promise.resolve("Task 3 Done")
])
.then(results => console.log(results))
.catch(err => console.error(err));

if (!Array.prototype.test) {
  Array.prototype.test = function(callback, thisArg) {
    // 'this' here refers to the array on which forEach was called
    const thisArray = this;

    console.log(thisArray);
    

    for (let i = 0; i < thisArray.length; i++) {
      // Only process if index exists (important for sparse arrays)
      if (i in thisArray) {
        // 'callback' is called with the given 'thisArg' context
        callback(thisArray[i], i);
      }
    }
  };
}

const numbers = [10, 20, 30];

numbers.test(function (num, index) {
  console.log(num, index);
});

