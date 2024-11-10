let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open')

    }
    // Select DOM elements for statistics calculation
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const calculateBtn = document.getElementById('calculateBtn');
const totalRevenueEl = document.getElementById('totalRevenue');
const averagePriceEl = document.getElementById('averagePrice');

// Calculate total revenue and average price when the button is clicked
calculateBtn.addEventListener('click', function() {
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value);

    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        alert("Please enter valid numbers for both price and quantity.");
        return;
    }

    // Calculate total revenue and average price
    const totalRevenue = price * quantity;
    const averagePrice = totalRevenue / quantity;

    // Update the results in the DOM
    totalRevenueEl.textContent = totalRevenue.toFixed(2);
    averagePriceEl.textContent = averagePrice.toFixed(2);
});