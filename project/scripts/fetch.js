// fetch.js
document.addEventListener('DOMContentLoaded', () => {

    // Fetch products from the JSON file and display them
    async function fetchAndDisplayProducts() {
        try {
            const response = await fetch('clothes.json'); // Make sure clothes.json is in the root or specify the correct path
            const products = await response.json();

            const productList = document.getElementById('product-list');
            productList.innerHTML = ''; // Clear existing content

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Size: ${product.size}</p>
                    <p>Color: ${product.color}</p>
                    <p>Origin: ${product.origin}</p>
                    <p>Grade: ${product.grade}</p>
                    <p>Price: $${product.price ? product.price : "TBD"}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productList.appendChild(productCard);
            });
        } catch (error) {
            console.error("Error fetching products:", error);
            const productList = document.getElementById('product-list');
            productList.innerHTML = '<p>Sorry, we couldn\'t load the products at this time.</p>';
        }
    }

    // Add product to cart
    function addToCart(productId) {
        let cartCount = document.getElementById("cart-count");
        let currentCount = parseInt(cartCount.innerText.split(': ')[1]) || 0;
        cartCount.innerText = `Cart: ${currentCount + 1}`;
        alert(`Product ${productId} added to cart!`);
    }

    // Call fetchAndDisplayProducts to load the products on page load
    fetchAndDisplayProducts();
});
