// let btns= document.querySelectorAll("button");

// for (btn of btns){

//     // if we use just onclick only one function will be executed
//     // btn.onclick=sayHello;
//     // btn.onclick=arc;

//     // if we use addEventListener here so both function run
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", arc);
//     // btn.addEventListener("dblclick", function (){
//     //     alert("You just double clicked...")
//     // });
// }

// console.dir(btns);

// // btn.onclick= function(){
// //     alert("button was clicked");
// // };

//     //or
// function sayHello(){
//     alert("Hello user...!");
// };
// function arc(){
//     alert("Craeted by Archit...!!")
// };

let btn = document.querySelector("button");

// btn.addEventListener("mouseenter", function(){
btn.addEventListener("click", function(){
    let h3= document.querySelector("h3");
    let randomColor= getRandomColor();
    h3.innerText=randomColor;
    console.log ("color updated");

    let div= document.querySelector("div");
    div.style.backgroundColor=randomColor;
});

function getRandomColor(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}