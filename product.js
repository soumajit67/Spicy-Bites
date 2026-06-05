import { food } from "./food_category.js";
import { cartItems, saveCartItems } from "./cartStore.js";

function populateProductDetails() {
    const productImage = document.getElementById('product-img');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description-data');
    const addToCartButton = document.getElementById('add-to-cart-button');


    
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());

    const productId = queryParamsObject['product-id'];

    const products = Object.values(food).flat();

    const product = products.find((product) => product.id == productId);

    productImage.src = product.image;
    productName.textContent = product.name;
    productPrice.textContent = product.price;
    productDescription.textContent = product.description;


 addToCartButton.addEventListener('click', () => {
        const alreadyInCart = cartItems.some(item => item.id == product.id);
        
        if (alreadyInCart) {
            alert(`${product.name} is already in your cart!`);
            return;
        }
        
        cartItems.push(product);        
        saveCartItems();
        
        addToCartButton.textContent = 'Added ✓';
        addToCartButton.style.backgroundColor = '#36c918';
        setTimeout(() => {
            addToCartButton.textContent = 'Add to cart';
            addToCartButton.style.backgroundColor = '';
        }, 1200);
        
        console.log('Cart now:', cartItems);
    });

}

populateProductDetails();
