// Example backend cart logic (Node.js/Express style)

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    const existing = this.items.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }

  removeItem(itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  updateQuantity(itemId, quantity) {
    const item = this.items.find((i) => i.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }

  getTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  getItems() {
    return this.items;
  }
}

module.exports = Cart;