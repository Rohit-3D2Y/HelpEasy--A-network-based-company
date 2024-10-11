import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Sparkles, Wrench, PaintBucket, Truck, Droplet, Zap, Star, ArrowLeft } from 'lucide-react';

// Simulated backend service for ratings
const useRatingService = () => {
  const [ratings, setRatings] = useState(() => {
    const savedRatings = localStorage.getItem('serviceRatings');
    return savedRatings ? JSON.parse(savedRatings) : {};
  });

  useEffect(() => {
    localStorage.setItem('serviceRatings', JSON.stringify(ratings));
  }, [ratings]);

  const updateRating = (serviceId, newRating) => {
    setRatings(prev => ({
      ...prev,
      [serviceId]: {
        totalStars: (prev[serviceId]?.totalStars || 0) + newRating,
        count: (prev[serviceId]?.count || 0) + 1
      }
    }));
  };

  const getAverageRating = (serviceId) => {
    const serviceRating = ratings[serviceId];
    if (!serviceRating) return 0;
    return (serviceRating.totalStars / serviceRating.count).toFixed(1);
  };

  return { updateRating, getAverageRating };
};

// Category definitions
const categories = [
  { name: 'Cleaning', icon: <Sparkles className="w-6 h-6 text-purple-500" />, path: '/category/cleaning' },
  { name: 'Repair', icon: <Wrench className="w-6 h-6 text-orange-500" />, path: '/category/repair' },
  { name: 'Painting', icon: <PaintBucket className="w-6 h-6 text-teal-500" />, path: '/category/painting' },
  { name: 'Shifting', icon: <Truck className="w-6 h-6 text-red-500" />, path: '/category/shifting' },
  { name: 'Plumbing', icon: <Droplet className="w-6 h-6 text-blue-500" />, path: '/category/plumbing' },
  { name: 'Electric', icon: <Zap className="w-6 h-6 text-yellow-500" />, path: '/category/electric' },
];

// Simulated service provider data
const allServiceProviders = {
  cleaning: [
    {
      id: 1,
      name: "Rohit Tiwari",
      service: "House Cleaning",
      location: "SJCEM",
      hourlyRate: '2500',
      image: "https://t3.ftcdn.net/jpg/01/36/23/84/360_F_136238494_m6KM5sGWvyDxtImgi3kitAH5gxLxLAIy.jpg"
    },
    {
      id: 2,
      name: "Aaditya Singh",
      service: "Washing Cloths",
      location: "SJCEM",
      hourlyRate: '2000',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOCkNbHIcu-5VoPzSdKeXRzECMN0_32vUDg&s"
    },
  ],
  painting: [
    {
      id: 3,
      name: "Bob Ross",
      service: "Interior Painting",
      location: "123 Happy Trees Ave, FL",
      hourlyRate: '3000',
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: "Lisa Frank",
      service: "Exterior Painting",
      location: "456 Rainbow Road, CA",
      hourlyRate: '3500',
      image: "/api/placeholder/300/300"
    }
  ],
  repair: [
    {
      id: 5,
      name: "Fix-it Felix",
      service: "General Repairs",
      location: "789 Handyman Lane, TX",
      hourlyRate: '1500',
      image: "/api/placeholder/300/300"
    }
  ],
};

// StarRating component for service rating
const StarRating = ({ serviceId, onRate }) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const handleClick = (rating) => {
    if (!hasRated) {
      onRate(rating);
      setHasRated(true);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onMouseEnter={() => !hasRated && setHoveredStar(star)}
          onMouseLeave={() => !hasRated && setHoveredStar(0)}
          onClick={() => handleClick(star)}
          disabled={hasRated}
          className={`${hasRated ? 'cursor-default' : 'cursor-pointer'}`}
        >
          <Star
            className={`w-5 h-5 ${
              star <= hoveredStar || hasRated
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

// Main Category Page Component
export default function ServiceCategoryPage({ newPartner }) {
  const { category = 'cleaning' } = useParams();
  const navigate = useNavigate();
  const { updateRating, getAverageRating } = useRatingService();
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    // Combine existing service providers with the new partner
    const updatedProviders = [
      ...(allServiceProviders[category] || []),
      ...(newPartner && newPartner.category === category ? [newPartner] : []),
    ];
    setServiceProviders(updatedProviders);
  }, [category, newPartner]);

  const handleRate = (serviceId, rating) => {
    updateRating(serviceId, rating);
  };

  const currentCategory = categories.find(cat => cat.path === `/category/${category}`) || categories[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center text-purple-600 hover:text-purple-700"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Back to Home</span>
            </button>
            <div className="h-6 w-px bg-gray-300" />
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-gray-700"
            >
              HELPEASY
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 p-4 bg-gray-50">
          <h2 className="text-lg font-semibold mb-4 text-purple-600">Categories</h2>
          <nav className="space-y-2">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to={cat.path}
                className={`w-full flex items-center p-3 rounded-lg text-left ${
                  cat.path === `/category/${category}` ? 'bg-purple-100' : 'hover:bg-gray-100'
                }`}
              >
                {cat.icon}
                <span className="ml-3">{cat.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6 capitalize">{category}</h1>
          {serviceProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceProviders.map((provider) => (
                <div key={provider.id} className="bg-white rounded-lg shadow p-6">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm capitalize">
                    {category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{provider.service}</h3>
                  <p className="text-purple-600 mt-1">{provider.name}</p>
                  <p className="text-gray-500 text-sm mt-1">{provider.location}</p>
                  <p className="text-gray-500 text-sm mt-1">{provider.hourlyRate}</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Rate this service:</p>
                      <StarRating
                        serviceId={provider.id}
                        onRate={(rating) => handleRate(provider.id, rating)}
                      />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Average Rating:</p>
                      <p className="font-bold">{getAverageRating(provider.id) || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No service providers available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}