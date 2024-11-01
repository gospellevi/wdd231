// cart.js
export function updateCartCount() {
    const cartCount = localStorage.getItem("cartCount") || 0;
    document.getElementById("cart-count").textContent = cartCount;
}

export function addToCart(itemId) {
    let cartCount = localStorage.getItem("cartCount") || 0;
    cartCount = parseInt(cartCount) + 1;
    localStorage.setItem("cartCount", cartCount);
    updateCartCount();
}
