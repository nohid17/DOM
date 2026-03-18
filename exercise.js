// alert('hello maymoon');

let h1Element = document.body.firstElementChild;
h1Element = document.body.children[0];

console.dir(h1Element)
console.dir(h1Element.parentElement);
console.dir(h1Element.nextElementSibling);

h1Element = document.getElementById('taskThree');

console.dir(h1Element);

let taskFour = document.querySelector('.taskFour');
console.dir(taskFour);

taskFour.textContent = 'this is awesome changes and beautiful ;D';

///
let headerElement = document.body.children[0];
document.body.children[1];
// console.log(headerElement);
// let taskThree = document.getElementsByTagName('h1');
let taskThree = document.getElementById('taskThree');
console.log(taskThree);

let taskFour = document.querySelector('.taskFour');
console.dir(taskFour);

let bonus = document.body.children[1];
bonus = 'I am AWESOME';
console.log(bonus);
