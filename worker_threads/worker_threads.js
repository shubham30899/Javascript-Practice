// main.js
const { Worker } = require('worker_threads');

console.log("Main thread starting...");

// Create a worker thread
const worker = new Worker('./worker.js');

// Listen for messages from worker
worker.on('message', (msg) => {
  console.log('Message from worker:', msg);
});

// Handle errors
worker.on('error', (err) => {
  console.error('Worker error:', err);
});

// Send data to worker
worker.postMessage('Start working');
console.log("Main thread finished.");