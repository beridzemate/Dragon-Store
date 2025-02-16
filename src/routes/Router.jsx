import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage } from "../pages/client/Home";
import { ProductsPage } from "../pages/client/Products";
import { AdminProductsPage } from "../pages/admin/AdminProducts";
import { LoginPage } from "../pages/auth/Login";
import { useAuth } from "../contexts/AuthContext";

// Protect admin routes
const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user?.isAdmin ? children : <Navigate to="/login" />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminProductsPage />
      </AdminRoute>
    ),
  },
]);