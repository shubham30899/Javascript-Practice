// process.nextTick makes sure the callback is called asynchronously,
// even if the data is ready immediately.
function getData(cb) {
  if (cb) {
    // Even if data is ready immediately, make sure callback is async
    process.nextTick(() => cb("Here is your data"));
    // console.log("Here is your data");
  }
}

console.log("Calling getData...");
getData((data) => console.log("Got:", data));
console.log("Done");


const fs = require("fs");
const zlib = require("zlib");

const readable = fs.createReadStream("input.txt", { encoding: "utf-8",highWaterMark: 10 });

// reading a file chunk by chunk
readable.on("data", (chunk) => {
  console.log("New chunk received:", chunk.length, chunk);
});

readable.on("end", () => {
  console.log("File completely read");
});


// // writing in a file
// const writable = fs.createWriteStream("output.txt");
// readable.pipe(writable);

// // write in a compressed file
// const compressed = fs.createWriteStream("bigfile.txt.gz");

// readable.pipe(zlib.createGzip()).pipe(compressed);


