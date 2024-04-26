// Data for clothing items
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

// Function to generate HTML for clothing items
function generateClothingHTML() {
    const container = document.querySelector('.row.row-cols-1.row-cols-md-3.g-4.py-5');

    clothingData.forEach(item => {
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
        mb5.className = 'mb-5 d-flex justify-content-around';
        
        const price = document.createElement('h3');
        price.textContent = item.price;
        
        const buyNowLink = document.createElement('a');
        buyNowLink.href = 'products.html';
        buyNowLink.className = 'btn btn-buy-now';
        buyNowLink.textContent = 'Buy Now';
        
        mb5.appendChild(price);
        mb5.appendChild(buyNowLink);
        
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
