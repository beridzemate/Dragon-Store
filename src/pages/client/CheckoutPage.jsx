import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebase/config';
import { formatPrice } from '../../utils/formatPrices';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button'; 
const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Save order to Firestore
      await addDoc(collection(db, 'orders'), {
        ...formData,
        items: cartItems,
        total: totalPrice,
        status: 'pending',
        createdAt: new Date(),
      });

      // Clear cart and redirect
      clearCart();
      navigate('/order-success');
    } catch (err) {
      setError('Failed to place order. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-dragon-red">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>
                  {item.quantity} x {formatPrice(item.price)}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t pt-4 mt-4">
            <p className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{formatPrice(totalPrice)}</span>
            </p>
          </div>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Shipping Details</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <textarea
                required
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 text-red-600">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-dragon-red text-white py-2 px-4 rounded mt-6 hover:bg-red-800 transition-colors disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;