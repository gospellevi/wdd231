// main.js
document.addEventListener('DOMContentLoaded', () => {

    // Login and Signup Buttons
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    }

    // Set Footer Details
    // Current Year and Last Modified
    const currentyear = document.querySelector("#currentyear");
    const lastmodified = document.querySelector("#lastmodified");

    if (currentyear) {
        let today = new Date();
        currentyear.innerHTML = today.getFullYear();
    }
    if (lastmodified) {
        let date = new Date(document.lastModified);
        lastmodified.innerHTML = `Last Updated: ${date}`;
    }

    // Hamburger Menu
    const hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    hamburger.innerHTML = '&#9776;'; // hamburger icon

    const header = document.querySelector('header');
    const nav = document.getElementById('navMenu');

    if (header && nav) {
        header.insertBefore(hamburger, nav);
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('show'); // Add or remove "show" class
            // console.log(nav.classList); // for debugging 
            hamburger.innerHTML = nav.classList.contains('show') ? '&#10006;' : '&#9776;';
        });
    }

  
        // Fetching Products and Rendering New Arrivals
    async function fetchProducts() {
        try {
            const response = await fetch('clothes.json');
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    // Display Products in New Arrivals Section
    function displayProducts(products) {
        const container = document.getElementById('products-container');
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            container.appendChild(productCard);
        });
    }

    // Add Product to Cart and Update Counter
    function addToCart(productId) {
        let cartCount = document.getElementById("cart-count");
        let currentCount = parseInt(cartCount.innerText);
        cartCount.innerText = currentCount + 1;
    }

    // Newsletter Subscription Form Validation
    const newsletterForm = document.getElementById("newsletter-form");
    newsletterForm.addEventListener("submit", event => {
        event.preventDefault();
        const email = event.target[0].value;
        if (validateEmail(email)) {
            alert("Thank you for subscribing!");
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // const timestampField = document.getElementById("timestamp");
    // if (timestampField) {
    //     timestampField.value = new Date().toLocaleString();
    // }

    // // Thank You page data population
    // if (window.location.pathname.includes("thankyou.html")) {
    //     const urlParams = new URLSearchParams(window.location.search);

    //     // Fill in the confirmation details
    //     document.getElementById("first-name-display").textContent = urlParams.get("first-name");
    //     document.getElementById("last-name-display").textContent = urlParams.get("last-name");
    //     document.getElementById("email-display").textContent = urlParams.get("email");
    //     document.getElementById("phone-display").textContent = urlParams.get("phone");
    //     document.getElementById("business-name-display").textContent = urlParams.get("business-name");
    //     document.getElementById("timestamp-display").textContent = urlParams.get("timestamp");
    // }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Run fetchProducts to load new arrivals
    fetchProducts();


    
});
