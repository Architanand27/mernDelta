// let smallImg=document.getElementsByClassName("comicImg");

// for (let i=0; i<smallImg.length; i++){
//     smallImg[i].src="assets/Web_of_Spider-Man_Vol_1_129-1.png";

// }

// add a red paragraph

let para1=document.createElement('p');
para1.innerText="Hay I'm Red!";
document.querySelector('body').append(para1);
para1.style.color='red';

let head1=document.createElement('h3');
head1.innerText="I'm a blue h3!";
document.querySelector('body').append(head1);
head1.style.color='blue';

let div1=document.createElement('div');
div1.classList.add('box1');
document.querySelector('body').append(div1);

let head2=document.createElement('h1');
head2.innerText="I'm in a div";
document.querySelector('div').append(head2);

let para2= document.createElement('p');
para2.innerText="ME TOO!";
document.querySelector('div').append(para2);