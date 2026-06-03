// let n=5;

// for (let i=0; i<n; i++){
//     console.log("hello, ", i);
// }


// process in node js

// console.log(process);

// let args= process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("welcome ", args[i]);
// }




// import (requireng files) module.export from math file 

const math = require("./math");

console.log(math);
console.log(math.pi);
console.log(math.sum(2,3));



// import requireing files from different directory..

const fruitInfo= require("./fruits");

console.log(fruitInfo);
