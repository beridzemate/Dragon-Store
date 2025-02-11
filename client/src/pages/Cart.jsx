// src/pages/Cart.jsx
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { theme } from '../theme';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const CartItem = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background: ${theme.colors.light};
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${theme.colors.primary};
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;

  button {
    background: ${theme.colors.primary};
    color: ${theme.colors.light};
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: ${theme.colors.secondary};
    }
  }
`;

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContainer>
      <h1>Your Sauce Selection 🛒</h1>
      {cartItems.map(item => (
        <CartItem key={item._id}>
          <ItemImage src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <QuantityControls>
              <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                +
              </button>
            </QuantityControls>
            <button 
              onClick={() => removeFromCart(item._id)}
              style={{ color: theme.colors.primary }}
            >
              Remove
            </button>
          </div>
        </CartItem>
      ))}
      <div style={{ textAlign: 'right', marginTop: '2rem' }}>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button 
          style={{
            background: theme.colors.primary,
            color: theme.colors.light,
            padding: '1rem 3rem',
            borderRadius: '30px'
          }}
        >
          Checkout 🚀
        </button>
      </div>
    </CartContainer>
  );
}