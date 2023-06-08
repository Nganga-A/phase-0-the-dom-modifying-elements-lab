// Write your code here!
document.querySelector ('#main').remove(); //remove main

const newHeader = document.createElement('h1');

newHeader.id ='victory';

const yourName = 'John'; 
newHeader.textContent = `${yourName} is the champion`;

document.body.appendChild(newHeader);
