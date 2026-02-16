let data = {}

console.log("Starts here");
function fetchData (cb){
    setTimeout(() => {
        data = {name:"Shubham"}
        cb()
    },0)
}

function displayData(){
    console.log(data);
    console.log("Ends here");   
}


fetchData(displayData);

const async = require("async");

async.series(
  [
    function (callback) {
      setTimeout(() => {
        console.log("Task 1");
        callback(null, "Result 1"); // no error, pass result
      }, 1000);
    },
    function (callback) {
      setTimeout(() => {
        console.log("Task 2");
        callback(null, "Result 2");
      }, 500);
    },
  ],
  function (err, results) {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("All results:", results);
    }
  }
);

console.log(process.pid); 

