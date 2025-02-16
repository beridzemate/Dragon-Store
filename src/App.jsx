// src/App.jsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; 
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/client/HomePage';
import ProductsPage from './pages/client/ProductsPage';
import ProductDetailPage from './pages/client/ProductDetailPage';
import CheckoutPage from './pages/client/CheckoutPage';
import LoginPage from './pages/auth/LoginPage';
import AdminProductsPage from './pages/admin/AdminProductPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import NoMatchPage from './pages/NoMatchPage';
import { useAuth } from './contexts/AuthContext';

// Admin route protection
const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user?.isAdmin ? children : <Navigate to="/login" replace />;
};

// Router configuration
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NoMatchPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/login', element: <LoginPage /> },
      {
        path: '/admin',
        children: [
          {
            path: 'products',
            element: (
              <AdminRoute>
                <AdminProductsPage />
              </AdminRoute>
            )
          },
          {
            path: 'orders',
            element: (
              <AdminRoute>
                <AdminOrdersPage />
              </AdminRoute>
            )
          }
        ]
      },
      { path: '*', element: <NoMatchPage /> }
    ]
  }
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;