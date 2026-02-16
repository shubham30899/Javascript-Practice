// const pr = new Promise((resolve,reject) => {
//     resolve("Over")
//     setTimeout(()=>{
//         resolve("Done")
//     },2000)
// })

// pr.then((msg) => {
//     console.log(msg);  
//     return pr
// }).then((res) => {
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);

// })

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve('First'), 5000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => reject('Second'), 2000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => resolve('Third'), 1500));

// console.time('All Promises');


// Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log(results); // ➝ ["First", "Second", "Third"]
//     console.timeEnd('All Promises'); // ➝ About 2000ms
//   })
//   .catch(err => {
//     console.error(err); // Only runs if any promise rejects
//     console.timeEnd('All Promises');
//   });

// const fetchWithTimeout = Promise.race([new Promise((_, reject) => setTimeout(() => reject("Timeout!"), 2000))
// ]);

// fetchWithTimeout
//   .then(res => console.log("Success"))
//   .catch(err => console.error(err)); // Timeout!


const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("✅ Task completed!");
  } else {
    reject("❌ Task failed!");
  }
});

myPromise
  .then((result) => console.log(result))   // runs if resolve() is called
  .catch((error) => console.error(error)) // runs if reject() is called
  .finally(() => console.log("Promise finished"));

  function step1() {
  return Promise.resolve("Step 1 done");
}
function step2(prev) {
  return Promise.resolve(prev + " → Step 2 done");
}
function step3(prev) {
  return Promise.resolve(prev + " → Step 3 done");
}

step1()
  .then(step2)
  .then(step3)
  .then((result) => console.log(result));



