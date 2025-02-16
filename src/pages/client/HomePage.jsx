import React from 'react';
import { Button } from '../../components/ui/Button';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const HomePage = () => {
  const featuredSauces = [
    {
      id: 1,
      name: "Dragon's Breath",
      description: "Our signature sauce that started it all. A perfect blend of habanero and ghost peppers.",
      heatLevel: 4,
      price: 12.99
    },
    {
      id: 2,
      name: "Phoenix Fire",
      description: "Sweet and spicy combination of scotch bonnets and tropical fruits.",
      heatLevel: 3,
      price: 11.99
    },
    {
      id: 3,
      name: "Eastern Thunder",
      description: "Asian-inspired hot sauce with Thai chilies and lemongrass.",
      heatLevel: 2,
      price: 10.99
    }
  ];

  const renderHeatLevel = (level) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index}
        className={`text-lg ${index < level ? 'text-red-500' : 'text-gray-300'}`}
      >
        🌶️
      </span>
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-dragon-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Dragon Store</h1>
          <p className="text-xl mb-8">Discover our collection of artisanal hot sauces</p>
          <a href="/products">
            <Button className="bg-white text-dragon-red hover:bg-gray-100 text-lg px-8 py-6">
              Shop Now
              <span className="ml-2">→</span>
            </Button>
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Sauces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSauces.map((sauce) => (
              <Card key={sauce.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle>{sauce.name}</CardTitle>
                  <CardDescription>{sauce.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    {renderHeatLevel(sauce.heatLevel)}
                  </div>
                  <p className="text-2xl font-bold text-dragon-red">
                    ${sauce.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-dragon-red hover:bg-red-700">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4">⭐</span>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handcrafted sauces using the finest ingredients</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4">🏆</span>
              <h3 className="text-xl font-bold mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for exceptional taste and quality</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4">🌶️</span>
              <h3 className="text-xl font-bold mb-2">Heat Variety</h3>
              <p className="text-gray-600">Options for every spice preference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to receive updates about new sauces and exclusive offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dragon-red"
            />
            <Button className="bg-dragon-red hover:bg-red-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;