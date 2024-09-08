// Array to hold cart items
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = ''; // Clear previous content
    let total = 0;

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div>
                <h4>${item.title}</h4>
                <p>Author: ${item.author}</p>
                <p>Price: Rs. ${item.price}</p>
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    cartTotalElement.innerText = total.toFixed(2);
}

// Function to remove item from cart
function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove item from array
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}

// Initial call to display cart items
displayCartItems();
