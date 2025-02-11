import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1) => {
    setItems(current => {
      const existingItem = current.find(item => item.product._id === product._id);
      
      if (existingItem) {
        return current.map(item =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...current, { product, quantity }];
    });
    toast.success('Added to cart');
  };

  const removeFromCart = (productId) => {
    setItems(current => current.filter(item => item.product._id !== productId));
    toast.success('Removed from cart');
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    
    setItems(current =>
      current.map(item =>
        item.product._id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared');
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = item.product.price * (1 - (item.product.discount || 0) / 100);
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);