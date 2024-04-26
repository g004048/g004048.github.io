document.addEventListener('DOMContentLoaded', function() {
const clothingData = [
    {
        imgSrc: "Clothing_one.jpg",
        title: "Frenchie Bling Hoodie",
        description: "Discover the latest trends in men's fashion with our quality t-shirt. Perfect for both formal and casual occasions, this versatile piece will elevate your style effortlessly.",
        price: "€75"
    },
    {
        imgSrc: "Clothing_two.jpg",
        title: "Most Slept on T-shirt",
        description: "Discover the latest trends in men's fashion with our quality t-shirt. Perfect for both formal and casual occasions, this versatile piece will elevate your style effortlessly.",
        price: "€85"
    },
    {
        imgSrc: "Clothing_three.jpg",
        title: "Force T-Shirt",
        description: "Discover the latest trends in men's fashion with our quality t-shirt. Perfect for both formal and casual occasions, this versatile piece will elevate your style effortlessly.",
        price: "€70"
    },
    {
        imgSrc: "Clothing_four.jpg",
        title: "Black Cargo Jeans",
        description: "Discover the latest trends in men's fashion with our quality t-shirt. Perfect for both formal and casual occasions, this versatile piece will elevate your style effortlessly.",
        price: "€90"
    },
    {
        imgSrc: "Clothing_five.jpg",
        title: "Almost Healed T-Shirt",
        description: "Discover the latest trends in men's fashion with our quality t-shirt. Perfect for both formal and casual occasions, this versatile piece will elevate your style effortlessly.",
        price: "€70"
    },
    {
        imgSrc: "Shoes.jpg",
        title: "Air Jordan 4s",
        description: "Discover the latest trends in men's fashion with our quality t-shirt. Perfect for both formal and casual occasions, this versatile piece will elevate your style effortlessly.",
        price: "€185"
    }
];

    let cartItems = [];

    function addToCart(item) {
        cartItems.push(item);
        updateCart();
    }

    function updateCart() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cartItems.length;
    }

    function generateClothingHTML() {
        const container = document.getElementById('clothing-items');
        container.innerHTML = '';

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

    generateClothingHTML();

    function generateCartHTML() {
        const cartContainer = document.getElementById('cart-items');
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

    generateCartHTML();
    });
