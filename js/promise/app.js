h2 = document.querySelector("h2");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h2.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

// changeColor("red", 1000)
//   .then(() => {
//     console.log("task 1: red color is applied...");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("task 2: orange color is applied..");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("task 3: orange color is applied..");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("task 4: orange color is applied..");
//   })

async function coll() {
    
}