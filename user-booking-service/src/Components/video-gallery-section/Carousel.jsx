import React, { useState } from 'react';

const Carousel = () => {
  const images = [
    'assets/images/img_1.jpg',
    'assets/images/img_5.jpg',
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle previous image, looping to the end of the array if we're at the beginning
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Handle next image, looping to the start of the array if we're at the end
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Compute the indices for the left, center, and right images
  const leftIndex = (currentIndex - 1 + images.length) % images.length;
  const rightIndex = (currentIndex + 1) % images.length;

  return (
    <div className="relative bg-white py-24">
      <h2 className="text-center text-2xl font-semibold mb-8">Our Gallery</h2>
      <div className="overflow-hidden w-full max-w-4xl mx-auto">
        <div className="flex transition-transform duration-700 ease-in-out">
          {/* Left Image */}
          <div className="w-[40%] flex justify-center items-center mx-4">
            <img
              src={images[leftIndex]}
              alt={`Left`}
              className="w-full h-auto rounded-lg shadow-md transform scale-90 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Center Image (Current Image) */}
          <div className="w-[60%] flex justify-center items-center mx-4">
            <img
              src={images[currentIndex]}
              alt={`Current`}
              className="w-full h-auto rounded-lg shadow-md transform scale-100 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Right Image */}
          <div className="w-[40%] flex justify-center items-center mx-4">
            <img
              src={images[rightIndex]}
              alt={`Right`}
              className="w-full h-auto rounded-lg shadow-md transform scale-90 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex
                ? 'bg-black'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
