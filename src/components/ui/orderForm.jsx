import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebase/config';
import { useCart } from '../../contexts/CartContext';

const OrderForm = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await addDoc(collection(db, 'orders'), {
        ...formData,
        items: cartItems,
        total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        status: 'pending',
        createdAt: new Date()
      });
      clearCart();
      setSuccess(true);
    } catch (error) {
      console.error('Order submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-dragon-red">Place Your Order</h2>
      {success ? (
        <div className="text-green-600 mb-4">
          Order placed successfully! Thank you 🐉
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              required
              className="w-full p-2 border rounded"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Delivery Address</label>
            <textarea
              required
              className="w-full p-2 border rounded"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-dragon-red text-white py-2 px-4 rounded hover:bg-red-800 disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>
        </form>
      )}
    </div>
  );
};

export default OrderForm;