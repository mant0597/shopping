import React from 'react';

const MensSection = () => {
  const products = [
    {
      id: 1,
      name: "Men's Classic Suit",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Casual Denim Jacket",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Premium T-Shirt",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Men's Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:translate-y-2 hover:translate-x-1"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover transition-all duration-300 ease-in-out"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-indigo-600 font-medium mt-1">{product.price}</p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md transition-all duration-300 ease-in-out hover:bg-indigo-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensSection;
