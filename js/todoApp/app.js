let toDo=[];

let req=prompt("Enter you choice: ");

while(true){
    if(req=="quit"){
        console.log("App quiting....");
        break;
    }
    if(req=="list"){
        console.log("=======================");
        for(let i=0; i<=toDo.length; i++){
            console.log(i, toDo[i]);
        }
        console.log("=======================");
    }
    else if(req=="add"){
        let task=prompt("Enter you task ");
        toDo.push(task);
        console.log("Task sucessfully added...");
    }
    else if(req=="del"){
        let ind=prompt("Enter Index of task to remove it. ");
        toDo.splice(ind,1);
        console.log("Task deleted sucessfully...");
    }
    else{
        console.log("Wrong choice...");
    }
    req=prompt("Enter you choice: ");
}