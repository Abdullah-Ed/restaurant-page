function loadContact(){
  const content = document.getElementById('content');
  const ContactContainer = document.createElement('div');
  ContactContainer.classList.add('contact-tab','currentContent');
  content.appendChild(ContactContainer);

  const ContactHeading = document.createElement('h1');
  ContactHeading.textContent = 'Find us here:';

  ContactContainer.appendChild(ContactHeading);
  ContactContainer.appendChild(createP('Monday - Sunday'))
  ContactContainer.appendChild(createP('9am - 10pm'))
  ContactContainer.appendChild(createP('Random Street - New York'))
  ContactContainer.appendChild(createP('darestaurant@gmail.com'))
  
};

function createP(text){
  const p = document.createElement('p');
  p.textContent= text;
  return p
}

export {loadContact};
