// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Sparkles, Wrench, PaintBucket, Truck, Droplet, Zap } from 'lucide-react';

// const HomeServiceSearch = () => {
//   const navigate = useNavigate();

//   const services = [
//     { name: 'Cleaning', icon: <Sparkles className="w-6 h-6" />, path: '/category/cleaning' },
//     { name: 'Repair', icon: <Wrench className="w-6 h-6" />, path: '/category/repair' },
//     { name: 'Painting', icon: <PaintBucket className="w-6 h-6" />, path: '/category/painting' },
//     { name: 'Shifting', icon: <Truck className="w-6 h-6" />, path: '/category/shifting' },
//     { name: 'Plumbing', icon: <Droplet className="w-6 h-6" />, path: '/category/plumbing' },
//     { name: 'Electric', icon: <Zap className="w-6 h-6" />, path: '/category/electric' },
//   ];

//   const handleServiceClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 relative overflow-hidden">
//       {/* Animated background curves */}
//       <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="10%">
//             <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
//             <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
//           </linearGradient>
//           <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#6366F1" stopOpacity="0.1" />
//             <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
//           </linearGradient>
//         </defs>
//         <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#gradient1)">
//           <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
//         </path>
//         <path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,245.3C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#gradient2)">
//           <animate attributeName="d" dur="15s" repeatCount="indefinite" values="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,245.3C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,234.7C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,245.3C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
//         </path>
//       </svg>

//       {/* Main content */}
//       <div className="max-w-4xl mx-auto p-8 relative z-10">
//         <h1 className="text-4xl text-gray-900 font-bold text-center mb-2">
//           Find Home <span className="text-purple-600">Service/Repair</span>
//         </h1>
//         <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Near You</h2>
//         <p className="text-gray-600 text-center mb-10">
//           Explore Best Home Service & Repair near you
//         </p>

//         <div className="relative mb-12">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full py-4 px-6 rounded-full bg-white bg-opacity-80 backdrop-blur-sm border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-lg"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors duration-200">
//             <Search className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
//           {services.map((service, index) => (
//             <button
//               key={index}
//               onClick={() => handleServiceClick(service.path)}
//               className="flex flex-col items-center p-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
//             >
//               <div className="bg-purple-100 p-3 rounded-full mb-3 text-purple-600">
//                 {service.icon}
//               </div>
//               <span className="text-sm font-medium text-gray-800">{service.name}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeServiceSearch;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Wrench,
  PaintBucket,
  Truck,
  Droplet,
  Zap,
} from "lucide-react";

const HomeServiceSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const services = [
    {
      name: "Cleaning",
      icon: <Sparkles className="w-6 h-6" />,
      path: "/category/cleaning",
    },
    {
      name: "Repair",
      icon: <Wrench className="w-6 h-6" />,
      path: "/category/repair",
    },
    {
      name: "Painting",
      icon: <PaintBucket className="w-6 h-6" />,
      path: "/category/painting",
    },
    {
      name: "Shifting",
      icon: <Truck className="w-6 h-6" />,
      path: "/category/shifting",
    },
    {
      name: "Plumbing",
      icon: <Droplet className="w-6 h-6" />,
      path: "/category/plumbing",
    },
    {
      name: "Electric",
      icon: <Zap className="w-6 h-6" />,
      path: "/category/electric",
    },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

   // Handle search input changes
   const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    const service = services.find(
      (service) => service.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (service) {
      navigate(service.path); // Navigate to the matched service category
    } else {
      alert("No matching service found!"); // Display an alert for no match
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 relative overflow-hidden">
      {/* Animated background curves */}
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="10%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.1" />{" "}
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
          </linearGradient>{" "}
        </defs>
        <path
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#gradient1)"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </path>
        <path
          d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,245.3C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#gradient2)"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,245.3C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,234.7C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,245.3C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </path>
      </svg>
      <div className="max-w-4xl mx-auto p-8 relative z-10">
        <h1 className="text-4xl text-gray-900 font-bold text-center mb-2">
          Find Home <span className="text-purple-600">Service/Repair</span>
        </h1>
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Near You
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Explore Best Home Service & Repair near you
        </p>

        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchInputChange} // Set the input value
            className="w-full py-4 px-6 rounded-full bg-white bg-opacity-80 backdrop-blur-sm border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-lg"
          />
          <button
            onClick={handleSearch} // Handle search button click
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors duration-200"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(service.path)}
              className="flex flex-col items-center p-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="bg-purple-100 p-3 rounded-full mb-3 text-purple-600">
                {service.icon}
              </div>
              <span className="text-sm font-medium text-gray-800">
                {service.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServiceSearch;
