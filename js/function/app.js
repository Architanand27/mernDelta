function dice(){
    let valOfDice=Math.ceil(Math.random()*6);
    console.log("Dice returns: ", valOfDice);
}

// dice();
// dice();
// dice();
// dice();
// dice();
// dice();

function table(n){
    for(let i=1; i<=10; i++){
        console.log(n*i)
    }
}

// table(2);
// table(3);


function sum(n){
    let count=0;
    for(let i=1; i<=n; i++){
        count+=i;
    }
    return count;
}


// console.log(sum(1000));

let str=["Hi","hello","byy","!"];

function concat(str){
    let result="";
    for(let i=0; i<str.length;i++){
        result += str[i];
    }
    return result;
}

// console.log(concat(str));


// Higher order function
// Returns a function

// let odd=function(n){
//     console.log(!(n%2==0));
// }
// let even=function(n){
//     console.log(n%2==0);
// }


function oddEvenFactory(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request=="even"){
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else {
        console.log("Wrong Request");
    }
}
let request="even";
let func= oddEvenFactory(request);

// func(0);


// setInterval(()=> {
//     console.log("Archit roxxx");
// }, 2000);
// clearInterval(1);

let squre=(n)=> (n**2);

console.log(squre(2));


let id=setInterval(()=>{
    console.log("Hello world");
}, 2000);

// console.log(id)
setTimeout(()=>{
    clearInterval(1);
    console.log("stopped...")
}, 10000)