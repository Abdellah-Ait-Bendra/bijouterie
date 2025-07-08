// Add to cart logic for product cards
document.querySelectorAll('.cardes a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const card = this.closest('.cardes');
    const name = card.querySelector('h1').textContent;
    const price = 2000; // ضع السعر الصحيح هنا أو استخرجه من بيانات المنتج
    const item = { id: name, name, price, quantity: 1 };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('تمت إضافة المنتج إلى السلة!');
  });
});