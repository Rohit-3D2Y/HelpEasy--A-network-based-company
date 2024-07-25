import React, { useState } from 'react';

const images = [
  '/src/assets/img1.webp',
  '/path/to/succulents-image.jpg',
  '/path/to/flower-bouquet-image.jpg',
  '/path/to/rose-image.jpg',
  // Add more image paths as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto my-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
      >
        &#8592; {/* Left arrow */}
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
      >
        &#8594; {/* Right arrow */}
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;