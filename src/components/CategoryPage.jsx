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
      image: "https://img.freepik.com/free-vector/set-surface-cleaning-products_23-2148534090.jpg"
    },
    {
      id: 2,
      name: "Aaditya Singh",
      service: "Washing Cloths",
      location: "SJCEM",
      hourlyRate: '2000',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOCkNbHIcu-5VoPzSdKeXRzECMN0_32vUDg&s"
    },
    {
      id: 7,
      name: "Smit Patil",
      service: "Mopping",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://www.shutterstock.com/image-photo/house-cleaning-fun-young-adorable-600nw-2424341435.jpg"
    },
    {
      id: 8,
      name: "Durvesh Vinherkar",
      service: "Brooming",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://thumbs.dreamstime.com/b/close-up-male-brooming-wooden-floor-cleaning-home-concept-39786001.jpg"
    },
    {
      id: 9,
      name: "Ankit Dubey",
      service: "Washroom Cleaning",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt6cc2bba866b78356/6539fb431e99383321db122c/how-to-give-yourtoilet-a-daily-clean.jpeg?width=954&height=636&format=jpg&quality=80"
    },
    {
      id: 10,
      name: "Hitanshu Vaidya",
      service: "Bathroom Cleaning",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://www.kerovit.com/blog/wp-content/uploads/2019/11/Tips-for-cleaning-your-bathroom.jpg"
    },
  ],
  painting: [
    {
      id: 3,
      name: "Bob Ross",
      service: "Interior Painting",
      location: "123 Happy Trees Ave, FL",
      hourlyRate: '3000',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStN84jV9tk0cQ1pa09PJbcjbekOob1hgGsA&s"
    },
    {
      id: 4,
      name: "Lisa Frank",
      service: "Exterior Painting",
      location: "456 Rainbow Road, CA",
      hourlyRate: '3500',
      image: "https://5.imimg.com/data5/RA/CW/JK/SELLER-79335428/all-painting-work.jpg"
    },
    {
      id: 11,
      name: "Rohit Tiwari",
      service: "Lawn Painting",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://5.imimg.com/data5/GC/IW/MY-967525/painting-job-500x500.jpg"
    },{
      id: 12,
      name: "Aaditya Singh",
      service: "House Painting & Rennovation",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWDYha8r6ZLePzLr6xTWu1_ca3ykr63_84n4YUtRJTuI4DLGSsc_9gktPkZxO3T0hAHU&usqp=CAU"
    },{
      id: 13,
      name: "Smit Patil",
      service: "House Painting",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://5.imimg.com/data5/SELLER/Default/2022/10/AS/NE/HD/123572238/office-painting-work-500x500.jpg"
    },
  ],
  repair: [
    {
      id: 5,
      name: "Fix-it Felix",
      service: "General Repairs",
      location: "789 Handyman Lane, TX",
      hourlyRate: '1500',
      image: "https://images.stockcake.com/public/c/8/3/c83d05ac-909a-42e9-810a-5c5f71e5f845_large/road-repair-work-stockcake.jpg"
    },
    {
      id: 14,
      name: "Rohit Tiwari",
      service: "Plumbing Repairs",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VRvO_yDXFHsyABpANnZ-5eorCq8P9sxR-w&s"
    },{
      id: 15,
      name: "Aaditya Singh",
      service: "Hardware Repairs",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLSyRgb-d-pgZUpysm4IRuSQSB8fbhjBqHw&s"
    },{
      id: 16,
      name: "Smit patil",
      service: "House Repairs",
      location: "SJCEM",
      hourlyRate: '500',
      image: "https://thumbs.dreamstime.com/z/auto-mechanic-repair-work-engine-24385992.jpg"
    },
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