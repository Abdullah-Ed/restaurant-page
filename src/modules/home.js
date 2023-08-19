function loadHome(){
  const content = document.getElementById('content');

  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-tab','currentContent');
  content.appendChild(homeContainer);

  const homeHeading = document.createElement('h1');
  homeHeading.textContent = 'Welcome to Da Restaurant';

  const description = document.createElement('p')
  description.textContent = 'We have the best the food you will ever try, have a look at our menu!';


  homeContainer.appendChild(homeHeading)
  homeContainer.appendChild(description)
};

export {loadHome}