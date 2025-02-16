import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/config';
import { formatPrice } from '../../utils/formatPrice';
import { useAuth } from '../../contexts/AuthContext';

const AdminOrdersPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders with real-time updates
  useEffect(() => {
    if (!user?.isAdmin) return;

    const fetchOrders = async () => {
      try {
        const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const ordersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate().toLocaleString()
        }));
        
        setOrders(ordersData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load orders');
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  // Update order status
  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      await updateDoc(doc(db, 'orders', orderId), {
        status: newStatus
      });
    } catch (err) {
      setError('Failed to update order status');
    }
  };

  if (!user?.isAdmin) return <div>Unauthorized access</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-dragon-red">Manage Orders</h1>

      {loading ? (
        <div>Loading orders...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-dragon-red text-white">
              <tr>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Items</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-b even:bg-gray-50">
                  <td className="p-3">{order.id.slice(0, 8)}</td>
                  <td className="p-3">
                    <div>{order.name}</div>
                    <div className="text-sm text-gray-600">{order.email}</div>
                  </td>
                  <td className="p-3">
                    {order.items?.map(item => (
                      <div key={item.id} className="flex items-center gap-2 mb-2">
                        <span>{item.quantity}x</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </td>
                  <td className="p-3">{formatPrice(order.total)}</td>
                  <td className="p-3">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                      className={`p-2 rounded ${
                        order.status === 'pending' ? 'bg-yellow-100' :
                        order.status === 'completed' ? 'bg-green-100' : 'bg-gray-100'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-3 text-sm">{order.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrdersPage;