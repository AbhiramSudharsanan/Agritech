document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('cartButton');
    const cartCount = document.getElementById('cartCount');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList');
    
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-item');
            const productName = productCard.dataset.name;
            const productPrice = parseFloat(productCard.dataset.price);
            const product = { name: productName, price: productPrice };
            cart.push(product);
            cartCount.textContent = cart.length;
            alert(`${productName} added to cart!`);
        });
    });

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const products = document.querySelectorAll('.product-item');
        products.forEach(product => {
            const name = product.dataset.name.toLowerCase();
            if (name.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent successfully!');
        this.reset();
    });
});
