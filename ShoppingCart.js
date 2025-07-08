import React, { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  // Update item quantity
  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} × {item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button
              onClick={() =>
                updateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
            >
              -
            </button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default ShoppingCart;