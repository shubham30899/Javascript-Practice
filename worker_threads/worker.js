// worker.js
const { parentPort } = require('worker_threads');

parentPort.on('message', (msg) => {
  console.log("Worker received:", msg);

  // Perform heavy computation
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }

  // Send result back
  parentPort.postMessage(`Sum is ${sum}`);
});
