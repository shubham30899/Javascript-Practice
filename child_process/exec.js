// using exec to run a shell command and capture its output
const { exec } = require("child_process");

exec("ls -l", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout:\n${stdout}`);
});






