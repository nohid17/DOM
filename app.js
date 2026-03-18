// console.dir(document);

// // alert();
// // window.alert();

// window.document
// document

// document.body.children[1].children[0].href = 'https://google.com';


let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

// anchorElement = document.querySelector('#external-link');
anchorElement = document.querySelector('p a');
anchorElement.href = 'https://academind.com';


// ADD AN ELEMENT
// 1. create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google!';

// 2. get access to the parent element hat should hold the new element
let firstParagraph = document.querySelector('p');

// 3. insert the new element into the parent element content
firstParagraph.append(newAnchorElement);


// REMOVE AN ELEMENT
// 1. select the lement that should be removed
let firstH1Element = document.querySelector('h1');
// document.querySelector('h1').remove();

// 2. remove it !
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element);//for older browsers


// MOVE AN ELEMENT
firstParagraph.parentElement.append(firstParagraph);

