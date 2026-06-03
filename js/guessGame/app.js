const range=prompt("Enter the range:");
let random=Math.ceil(Math.random()*range);
let option=prompt("Guess the num or enter quit to exit:");
while(true){
    
    console.log("===============================")
    if(option==random){
        console.log("Yah, you are right...")
        break;
    }
    else if(option=="quit"){
        console.log("You quit...")
        break;
    }
    else{
        if(option<random){
            option=prompt("Wrong Guess! try larger...");
        }
        else{
            option=prompt("Wrong Guess! try smaller...");
        }
        console.log("wrong Guess...")
    }
    
}