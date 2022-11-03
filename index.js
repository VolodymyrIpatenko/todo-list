'use strict';

// Create a new list item when clicking on the "Add" button
function newElement() {
  let inputValue = document.querySelector('#myInput').value;
  let item = document.createElement('li');
  let span = document.createElement('span');
  let closeSign = document.createTextNode('\u00D7');
  span.classList.add('close');
  span.append(closeSign);
  item.append(inputValue, span);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    list.appendChild(item);
  }
  document.getElementById('myInput').value = '';
}

let list = document.querySelector('ul');

function removeItem(e) {
  const currentSpan = e.target;
  if (currentSpan.tagName === 'SPAN') {
    const parentLi = currentSpan.closest('li');
    parentLi.style.display = 'none';
  }
}

function onHandleToogle(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}
const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', newElement);
list.addEventListener('click', onHandleToogle);
list.addEventListener('click', removeItem);
