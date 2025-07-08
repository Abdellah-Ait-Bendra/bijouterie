// Load cart from localStorage and display items
document.addEventListener('DOMContentLoaded', function () {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotalDiv = document.getElementById('cart-total');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>السلة فارغة.</p>';
    cartTotalDiv.textContent = '';
    return;
  }

  let total = 0;
  cartItemsDiv.innerHTML = cart.map(item => {
    total += item.price * item.quantity;
    return `<div>
      <strong>${item.name}</strong> - الكمية: ${item.quantity} - السعر: ${item.price} دج
    </div>`;
  }).join('');
  cartTotalDiv.textContent = `المجموع: ${total} دج`;
});