import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AdminLayout from './layouts/AdminLayout'
import ClientLayout from './layouts/ClientLayout'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'

// Client Pages
import Home from './pages/client/HomePage'
import Products from './pages/client/Products'
import Cart from './pages/client/Cart'
import Checkout from './pages/client/Checkout'
import Orders from './pages/client/Orders'
import Profile from './pages/client/Profile'

// Admin Pages
import Dashboard from './pages/admin/Dashboard'
import AdminProducts from './pages/admin/Products'
import AdminOrders from './pages/admin/Orders'
import AdminUsers from './pages/admin/Users'


// Auth Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
function App() {
  return (
    <>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          
          {/* Protected Client Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  )
}

export default App