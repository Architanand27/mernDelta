let btn1= document.querySelector("#cat");
btn1.addEventListener("click", async () => {
    let fact= await getFacts();
    console.log(fact);
    let p= document.querySelector("#result")
    p.innerText=fact;
})
let btn2=document.querySelector("#dog");

btn2.addEventListener("click", async () => {
    let image= await getImg();
    console.log(image);
    let img=document.querySelector(".img");
    img.innerHTML=`<img src="${image}" alt="huh! not fetched" >`;
})
let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";


// do same work with axios 
// for random cat facts...

async function getFacts() {
    try {
        let res= await axios.get(url);
        return res.data.fact;

    }
    catch(err) {
        console.log(err);
        return "No fact found";
    }
}


// for random dog images..
async function getImg() {
    try {
        let res= await axios.get(url2);
        // console.log(res);
        return res.data.message;
    }
    catch(err){
        console.log(err);
        return "no image found!";
    }
}







// fetch(url)
//     .then((response) => {
//         return response.json();    
//     })
//     .then((data) =>{
//         console.log("Data1: ",data.fact);    
//         return fetch(url);
//     })
//     .then((response) => {
//         return response.json();    
//     })
//     .then((data2) =>{
//         console.log("Data2: ", data2.fact)    
//     })
//     .catch((err) => {
//         console.log("ERROR: ",err);    
//     })


// do same work with the help of async and await..

// async function getFacts() {
//     try{
//        let res = await fetch(url);    
//         let data= await res.json();
//         console.log(data.fact); 
//     }
//     catch(err){
//         console.log("Error: ", err);    
//     }
// }


