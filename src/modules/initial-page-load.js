import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

const content = document.getElementById('content');
const header = document.createElement('div')
header.classList.add('header')
content.appendChild(header)

const restaurantName = document.createElement('h1')
restaurantName.textContent = 'Da Restaurant'
header.appendChild(restaurantName)

const buttonsContainer = document.createElement('div')
header.appendChild(buttonsContainer)

const buttons = []; // Array to store the buttons for active class management

function createButton(text, clickHandler) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', () => {
    removeActiveClass();
    addActiveClass(button);
    clearContent();
    clickHandler();
  });
  buttons.push(button); // Add button to the array
  buttonsContainer.appendChild(button);
}

function clearContent() {
  const currentContent = document.querySelector('.currentContent');
  if (currentContent) {
    content.removeChild(currentContent);
  }
}

function removeActiveClass() {
  buttons.forEach((button) => {
    button.classList.remove('active-button');
  });
}

function addActiveClass(button) {
  button.classList.add('active-button');
}

function loadPage() {
  loadHome();
}

function initialize() {
  createButton('Home', loadHome);
  createButton('Menu', loadMenu);
  createButton('Contact', loadContact);

  // Add active class to the "Home" button by default
  if (buttons.length > 0) {
    addActiveClass(buttons[0]);
  }

  loadPage();
}

export { initialize }