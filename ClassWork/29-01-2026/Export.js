/*

Module.exports=add;                // export single function
function add(a, b) {
  return a + b;
}
console.log("Export.js file executed");

*/


function add(a, b) {                  // export multiple functions
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// export functions
module.exports = { add, sub };
