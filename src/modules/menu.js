function loadMenu(){
  const content = document.getElementById('content');
  const menuTab = document.createElement('div');
  menuTab.classList.add('menu-tab','currentContent');
  content.appendChild(menuTab);
  
  const menuHeading = document.createElement('h1');
  menuHeading.textContent = 'Menu';
  menuTab.appendChild(menuHeading);
  
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menuTab.appendChild(menuContainer)
  
  
  menuContainer.appendChild(createFoodList('Burger','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.','6.00 $'));
  menuContainer.appendChild(createFoodList('cafe','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.','3.00 $'));
  menuContainer.appendChild(createFoodList('Pizza','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.','7.00 $'));
  menuContainer.appendChild(createFoodList('Ice Cream','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.','5.00 $'));
  menuContainer.appendChild(createFoodList('Fish','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.','7.00 $'));
  menuContainer.appendChild(createFoodList('Salat Bowl','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.','4.00 $'));
};

function createFoodList(name, description, price) {
  const foodContainer = document.createElement('div'); 

  const foodHeadLine = document.createElement('div')
  foodHeadLine.classList.add('food-head-line')

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodPrice = document.createElement('p');
  foodPrice.textContent = price;


  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;
  

  foodHeadLine.appendChild(foodName);
  foodHeadLine.appendChild(foodPrice);

  foodContainer.appendChild(foodHeadLine)
  foodContainer.appendChild(foodDescription);

  return foodContainer; 
}

export {loadMenu};