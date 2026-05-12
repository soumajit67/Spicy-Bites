export const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

export function saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}