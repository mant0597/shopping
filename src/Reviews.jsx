import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing selection of clothes! The quality is outstanding and the prices are reasonable.",
    date: "2024-02-15"
  },
  {
    id: 2,
    name: "Michael Brown",
    rating: 4,
    comment: "Great shopping experience. The staff was very helpful and friendly.",
    date: "2024-02-10"
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    comment: "Love the new collection! Will definitely be shopping here again.",
    date: "2024-02-05"
  },
  {
    id: 4,
    name: "David Clark",
    rating: 3,
    comment: "The store was nice, but I had some issues with the size availability.",
    date: "2024-01-28"
  },
  {
    id: 5,
    name: "Olivia Martinez",
    rating: 5,
    comment: "Had a wonderful experience! The staff is knowledgeable and friendly.",
    date: "2024-01-20"
  },
  {
    id: 6,
    name: "Sophia Taylor",
    rating: 5,
    comment: "Fantastic experience! The store is beautiful, and I found exactly what I was looking for. Highly recommend!",
    date: "2024-02-18"
  }
  
];

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">{review.comment}</p>
            <p className="text-sm text-gray-500 mb-4">{new Date(review.date).toLocaleDateString()}</p>
            <div className="flex justify-between items-center">
            <button className="text-white font-semibold text-sm py-2 px-4 border-2 border-indigo-600 rounded-full bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out">
  Reply
</button>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
