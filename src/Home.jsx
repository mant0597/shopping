import React from 'react';

const Home = () => (
  <section
    id="home"
    className="relative h-screen bg-cover bg-center pt-24 z-0" 
    style={{ backgroundImage: 'url(/images/women5.png)' }} 
  >
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
      <h1 className="text-4xl md:text-6xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 animate-fade-in">
        Let's Shop Unique Clothes
      </h1>
      <p className="mt-6 text-lg md:text-2xl font-light text-gray-300">
        Discover exclusive fashion for every style. Start your shopping journey today!
      </p>
    </div>
  </section>
);

export default Home;