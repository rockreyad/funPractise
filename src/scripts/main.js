//Dom Traversing the DOM

let OlItem = document.createElement('li');

//Add Id and Class
OlItem.className = 'text-green-500';
OlItem.id = 'new-element';

//Add Attribute
OlItem.setAttribute('title', 'A title to new Element');

OlItem.appendChild(document.createTextNode('Javascript'));

document.querySelector('ol').appendChild(OlItem);
//console.log(OlItem);


let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://instagram.com');
ulItem.appendChild(link);
link.className = 'text-blue-500 hover:text-red-500 underline';
document.querySelector('ul').appendChild(ulItem)

// Replacing Element

let newHeading = document.createElement('h1');

newHeading.appendChild(document.createTextNode('H1 new Heading'));
newHeading.className = 'text-4xl bg-cyan-300 text-white mb-5 rounded shadow p-2';


let oldHeading = document.querySelector('h3');
//let parent = document.querySelector('#container');
let parent = oldHeading.parentElement;

parent.replaceChild(newHeading, oldHeading);


//Removing Element
let listItems = document.querySelectorAll('li');
let list = document.querySelector('ul');

list.classList.add('hover:bg-violet-200');

list.setAttribute('title','new Title')
list.classList.remove('bg-gray-300')
// console.log(list);
// console.log(listItems);