import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl text-gray-800 leading-relaxed mb-6 font-serif">
              ShopStyle is your premier destination for fashion and style. We curate the finest collection
              of clothing and accessories to help you express your unique personality through fashion.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed font-serif">
              Founded in 2024, we've grown from a small boutique to a leading fashion retailer,
              serving customers worldwide with the latest trends and timeless classics. Our commitment is to deliver
              high-quality pieces that reflect your personal style and keep you ahead in the world of fashion.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Our Store"
              className="rounded-2xl shadow-2xl transform transition-transform hover:scale-105 duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
