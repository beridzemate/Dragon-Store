import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../../services/firebase/firestore";
import { ProductForm } from "../../components/features/admin/ProductForm";

export const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => setShowForm(true)} className="mb-6">
        Add New Sauce
      </button>
      {showForm && <ProductForm onClose={() => setShowForm(false)} />}
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{product.name}</h3>
            <button
              onClick={() => deleteProduct(product.id)}
              className="text-red-600 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};