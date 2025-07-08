// Add to cart logic for product cards
document.querySelectorAll('.add-to-cart').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const card = this.closest('.cardes');
    const name = this.getAttribute("data-name");
    const price = parseInt(this.getAttribute("data-price"), 10);
    const image = this.getAttribute("data-image");
    const item = { id: name, name, price, image, quantity: 1 };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  });
});