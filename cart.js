import { cartItems, saveCartItems } from "./cartStore.js";

function populateCart() {
  const cartProductsContainer = document.getElementById("cart-products");
  const subtotalEl = document.getElementById("subtotal");
  const discountEl = document.getElementById("discount");
  const totalEl = document.getElementById("total");

  cartProductsContainer.innerHTML = "";

  let subtotal = 0;

  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    const productImage = document.createElement("img");
    productImage.src = item.image;
    productImage.alt = item.model;

    const details = document.createElement("div");
    details.className = "item-details";

    const productTitle = document.createElement("p");
    productTitle.className = "product-title";
    productTitle.textContent = item.name;

    const productDescription = document.createElement("p");
    productDescription.className = "product-description";
    productDescription.textContent = item.description;

    const productPrice = document.createElement("p");
    productPrice.className = "product-price";
    productPrice.textContent = `Price: ${item.price}`;

    subtotal += parseFloat(item.price.toString().replace(/[^\d.]/g, "")) || 0;

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      cartItems.splice(index, 1);
      saveCartItems();
      populateCart();
    };

    details.appendChild(productTitle);
    details.appendChild(productDescription);
    details.appendChild(productPrice);

    cartItem.appendChild(productImage);
    cartItem.appendChild(details);
    cartItem.appendChild(removeBtn);

    cartProductsContainer.appendChild(cartItem);
  });

  // Calculate totals
  const discount = 0; // Change if you have discounts
  const total = subtotal - discount;

  // Update UI
  subtotalEl.textContent = `₹${subtotal}`;
  discountEl.textContent = `₹${discount}`;
  totalEl.textContent = `₹${total}`;
}

document.addEventListener("DOMContentLoaded", populateCart);
