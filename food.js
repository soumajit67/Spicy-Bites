import {food} from './food_category.js'


function foodCategories() {
    const categoryList = document.getElementById('categoryList');
    const categories = Object.keys(food);
    
    categories.forEach((category) => {
        const categoryItem = document.createElement('a');

        categoryItem.className = 'category-item';

        categoryItem.textContent = category;
        categoryItem.href = `foodList.html?category=${category}`;
        categoryList.appendChild(categoryItem);
    });
}

foodCategories();
