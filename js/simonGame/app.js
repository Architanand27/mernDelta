let gameSeq=[];
let userSeq=[];

let btns=["yellow", "red", "blue", "green"];

let started=false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("Game Started..");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 300);
}


function checkAns(idx){
    // console.log("current level ", level)

    // let idx= level-1;

    if(userSeq[idx]===gameSeq[idx]) {
        if (userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);

        }
    }
    else{
        h2.innerHTML= `Game over! You are at level <b> ${level} </b> <br> press any key to start..`

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 200)
        reset();
    }

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random btn chose..
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randBtn= document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnPress() {
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}