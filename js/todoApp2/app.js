let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");


btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText= input.value;
    let btnDel=document.createElement("button");
    btnDel.classList.add("del");
    btnDel.innerText="Delete";
    item.appendChild(btnDel);

    ul.appendChild(item);
    console.log(input.value)
    input.value="";
});




    // This will not work on ne added tasks
// let dels = document.querySelectorAll(".del");
// for(del of dels){
//     del.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// };



    // so we add event listener to the parent element
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON") {
        let listItem= event.target.parentElement;
        listItem.remove();
        console.log( "Deleted");
    };
});