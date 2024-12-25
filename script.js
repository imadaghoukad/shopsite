// script.js
const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close-modal');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];
let products = [
    { id: 1, name: 'Product 1', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 40, image: 'https://via.placeholder.com/150' },
];

function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function updateCartDisplay() {
    cartCount.textContent = cart.length;
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.dataset.id);
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            cart.push(productToAdd);
            updateCartDisplay();
        }
    }
});

cartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
});

displayProducts();
updateCartDisplay();