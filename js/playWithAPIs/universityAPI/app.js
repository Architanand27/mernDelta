// let url = "http://universities.hipolabs.com/search?name=";
// let btn=document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country= document.querySelector("input").value;

//     console.log(country);
//     let colleges=await getCollege(country);
    
//     show(colleges);
// })

// function show(colleges){
//     let list = document.querySelector("#list");
//     list.innerText="";
//     for(col of colleges){
//         console.log(col);
//         let li= document.createElement("li");
//         li.innerText=col.name;
//         list.appendChild(li);
//     }
// }


// async function getCollege(country) {
//     try {
//         let res= await axios.get(url+country);
//         return res.data;

//     }
//     catch(e) {
//         return e;
//     }
// }


// search using state in india...


let url = "http://universities.hipolabs.com/search?name=india&state-province=";
let btn=document.querySelector("button");

btn.addEventListener("click", async () => {
    let state= document.querySelector("input").value;

    console.log(state);
    let colleges=await getCollege(state);
    
    show(colleges);
})

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText="";
    for(col of colleges){
        console.log(col);
        let li= document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}


async function getCollege(state) {
    try {
        let res= await axios.get(url+state);
        return res.data;

    }
    catch(e) {
        return e;
    }
}