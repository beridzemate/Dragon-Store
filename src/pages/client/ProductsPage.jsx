import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import '../../components/ui/Card'; 
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/Card";

const ProductsPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Example products data - replace with your actual data source
  const products = [
    {
      id: 1,
      name: "Ghost Pepper Sauce",
      description: "Extremely hot sauce made with authentic ghost peppers",
      price: 14.99,
      heatLevel: "Very Hot",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Habanero Mango",
      description: "Sweet and spicy blend of habanero peppers and mango",
      price: 12.99,
      heatLevel: "Hot",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Jalapeño Green",
      description: "Classic jalapeño sauce with fresh herbs",
      price: 9.99,
      heatLevel: "Medium",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 4,
      name: "Chipotle Smokey",
      description: "Rich and smokey chipotle pepper sauce",
      price: 11.99,
      heatLevel: "Medium-Hot",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 5,
      name: "Carolina Reaper",
      description: "Ultimate hot sauce made with Carolina Reaper peppers",
      price: 19.99,
      heatLevel: "Extreme",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 6,
      name: "Mild Thai Sweet",
      description: "Mild and sweet Thai-inspired chili sauce",
      price: 8.99,
      heatLevel: "Mild",
      imageUrl: "/api/placeholder/400/300"
    }
  ];

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent navigation when clicking the Add to Cart button
    addToCart(product);
    // You could add a toast notification here
  };

  const getHeatLevelColor = (heatLevel) => {
    const colors = {
      'Mild': 'text-green-500',
      'Medium': 'text-yellow-500',
      'Medium-Hot': 'text-orange-500',
      'Hot': 'text-red-500',
      'Very Hot': 'text-red-600',
      'Extreme': 'text-red-700'
    };
    return colors[heatLevel] || 'text-gray-500';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dragon's Hot Sauce Collection</h1>
        {/* You can add filters or search here */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card 
            key={product.id}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <CardHeader className="p-0">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>

            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
              <CardDescription className="mb-2">{product.description}</CardDescription>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                <span className={`font-semibold ${getHeatLevelColor(product.heatLevel)}`}>
                  {product.heatLevel}
                </span>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <button 
                className="w-full bg-primary text-primary-foreground py-2 rounded-md 
                         hover:bg-primary/90 transition-colors duration-200"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;