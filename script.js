const products = [
    {"id": 1, "name": "Laptop", "price": 1500, "stock": 5, "image": "LAP.JPEG"},
    {"id": 2, "name": "Headphones", "price": 100, "stock": 10, "image": "hs.jpeg"},
    {"id": 3, "name": "Keyboard", "price": 50, "stock": 20, "image": "KB.JPEG"}
];

function displayProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 product-card';
        card.innerHTML = `
            <div class="card shadow-sm rounded">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Description not available.</p>
                    <p class="card-text"><strong>Price: $${product.price.toFixed(2)}</strong></p>
                    <p class="card-text"><small class="text-muted">Stock: ${product.stock > 0 ? product.stock : 'Out of stock'}</small></p>
                    <a href="#" class="btn btn-primary" ${product.stock === 0 ? 'disabled' : ''} onclick="addToCart(${product.id})">Add to Cart</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product.stock > 0) {
        product.stock -= 1; // Decrease stock
        const modalBody = document.getElementById('modalBody');
        modalBody.textContent = `${product.name} added to cart successfully.`;
        
        displayProducts(); // Refresh the product display
    } else {
        const modalBody = document.getElementById('modalBody');
        modalBody.textContent = `Sorry, ${product.name} is out of stock.`;
    }
    
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    modal.show();
}

displayProducts();
