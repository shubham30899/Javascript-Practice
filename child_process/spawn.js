// 1. Run a simple system command
const { spawn } = require("child_process");

const child1 = spawn("ls", ["-l"]); 

child1.stdout.on("data", (data) => {
  console.log("Output:", data.toString());
});

child1.stderr.on("data", (data) => {
  console.error("Error:", data.toString());
});

child1.on("close", (code) => {
  console.log(`Child exited with code ${code}`);
});

/-------------------------------------------------------------------------------------------------------------------------------/


// 2. Send data to child’s stdin and read its stdout

const { spawn } = require("child_process");

const child2 = spawn("cat"); // echoes input

child2.stdout.on("data", (data) => {
  console.log("Child output:", data.toString());
});

child2.stdin.write("Hello from parent\n");
child2.stdin.write("Another line\n");
child2.stdin.end();



/----------------------------------------------------------------------------------------/


// 3. Pipe child output into a file

const { spawn } = require("child_process");
const fs = require("fs");

const output = fs.createWriteStream("out.txt");
const child3 = spawn("cat");

child3.stdout.pipe(output);

child3.stdin.write("Saving this line\n");
child3.stdin.write("And this one too\n");
child3.stdin.end();

child3.on("close", () => console.log("File written: out.txt"));





// 4.Run a command with arguments


const { spawn } = require("child_process");

const child = spawn("grep", ["hello"]); // only lines with "hello"

child.stdout.on("data", (data) => {
  console.log("Matched:", data.toString());
});

child.stdin.write("hello world\n");
child.stdin.write("bye world\n");
child.stdin.end();
