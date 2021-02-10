import './style.css';
import render from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

function component() {
  let container = document.getElementById('content');

  document.addEventListener('click', event => {
    const target = event.target.innerText;

    if(target === 'HOME') {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
      container.appendChild(render())
    }

    if(target === 'MENU') {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
     container.appendChild(menu())
    }

    if(target === 'CONTACT') {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
     container.appendChild(contact())
    }
  })

  container.appendChild(render())
  return container;
 }

 document.body.appendChild(component());
