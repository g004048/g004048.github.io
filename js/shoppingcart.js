// Define a global variable to store cart items
let cartItems = [];

// Function to add item to cart
function addToCart(item) {
    cartItems.push(item);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
}

// Function to generate HTML for clothing items
function generateClothingHTML() {
    const container = document.querySelector('.row.row-cols-1.row-cols-md-3.g-4.py-5');

    clothingData.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = item.imgSrc;
        img.alt = '...';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = item.title;

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = item.description;

        const mb5 = document.createElement('div');
        mb5.className = 'mb-5 d-flex justify-content-between align-items-center';

        const price = document.createElement('h3');
        price.textContent = item.price;

        const buyNowButton = document.createElement('button');
        buyNowButton.type = 'button';
        buyNowButton.className = 'btn btn-buy-now';
        buyNowButton.textContent = 'Buy Now';
        buyNowButton.addEventListener('click', () => addToCart(item));

        mb5.appendChild(price);
        mb5.appendChild(buyNowButton);

        cardBody.appendChild(title);
        cardBody.appendChild(description);

        card.appendChild(img);
        card.appendChild(cardBody);
        card.appendChild(mb5);

        col.appendChild(card);

        container.appendChild(col);
    });
}

// Call the function to generate HTML
generateClothingHTML();

// Function to generate HTML for cart items
function generateCartHTML() {
    const cartContainer = document.getElementById('cart-items');

    // Clear existing cart items
    cartContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const title = document.createElement('h5');
        title.textContent = item.title;

        const price = document.createElement('p');
        price.textContent = item.price;

        cartItem.appendChild(title);
        cartItem.appendChild(price);

        cartContainer.appendChild(cartItem);
    });
}

// Call the function to generate HTML for cart items
generateCartHTML();
