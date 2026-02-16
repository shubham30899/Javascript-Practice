const cluster = require('cluster');
const os = require('os');   
const express = require('express');
const app = express();
const PORT = 3000;

const totalCPUs = os.cpus().length;

console.log(`Total CPUs: ${totalCPUs}`);


if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started`);
  });
}