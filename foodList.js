import { food } from './food_category.js';


function populateProducts() {
  const productList = document.getElementById('productList');

  const queryParams = new URLSearchParams(window.location.search);
  const queryParamsObject = Object.fromEntries(queryParams.entries());  
  const category = queryParamsObject['category'];

  let categoryItems = [];

      if(category) {
          categoryItems = food[category];
      } else {
          categoryItems = Object.values(food).flat();
      }
     


  categoryItems.forEach((item) => {
    const productItem = document.createElement('a');
    productItem.href = `product.html?product-id=${item.id}`;

    productItem.className = 'product-item';

    const productImage = document.createElement('div');
    productImage.className = 'product-img';

    const imageData = document.createElement('img');
    imageData.src = item.image;
    imageData.alt = item.model;
    productImage.appendChild(imageData);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const productName = document.createElement('div');
    productName.className = 'product-name';
    productName.textContent = item.name;

    const productPrice = document.createElement('div');
    productPrice.className = 'product-price';
    productPrice.textContent = item.price;

    cardBody.appendChild(productName);
    cardBody.appendChild(productPrice);

    productItem.appendChild(productImage);
    productItem.appendChild(cardBody);

    productList.appendChild(productItem); 
  })
}

populateProducts();
