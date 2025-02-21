import React from 'react';

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Join Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Store Manager Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out flex flex-col justify-between">
            <div className="mb-4">
              <img
                src="images/store.jpg"
                alt="Store Manager Icon"
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Store Manager</h3>
            <p className="text-gray-600 mb-4">
              We're looking for an experienced retail manager to join our team and help drive our store's success.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Fashion Consultant Card */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-100 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out flex flex-col justify-between">
            <div className="mb-4">
              <img
                src="images/fashion-con.avif"
                alt="Fashion Consultant Icon"
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fashion Consultant</h3>
            <p className="text-gray-600 mb-4">
              Join our team as a fashion consultant and help customers find their perfect style.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Apply Now
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out flex flex-col justify-between">
            <div className="mb-4">
              <img
                src="images/marketing.png"
                alt="Marketing Specialist Icon"
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Marketing Specialist</h3>
            <p className="text-gray-600 mb-4">
              Help grow our online presence and engage with our community through social media and digital campaigns.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
