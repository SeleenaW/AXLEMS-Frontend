import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = () => {
  const images = [
    'assets/images/image.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image1.jpg',
    'assets/images/image4.jpg',
    'assets/images/image5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Indices for the images
  const farLeftIndex = (currentIndex - 2 + images.length) % images.length;
  const leftIndex = (currentIndex - 1 + images.length) % images.length;
  const rightIndex = (currentIndex + 1) % images.length;
  const farRightIndex = (currentIndex + 2) % images.length;

  return (
    <div className="relative bg-white py-24">
      <h2 className="text-center text-3xl font-semibold mb-8">Explore Experiences</h2>
      <h1 className="text-center text-4xl font-semibold mb-8">Unveil your next journey</h1>
      <div className="relative overflow-hidden w-full max-w-auto mx-auto">
        <div
          className="relative flex transition-transform duration-1000 ease-in-out"
          style={{ perspective: '1000px', aspectRatio: '16 / 9' }}
        >
          <AnimatePresence initial={false}>
            {/* Far Left Image */}
            <motion.div
              key={farLeftIndex}
              initial={{ opacity: 0, x: -200, rotateY: -45 }}
              animate={{ opacity: 0.5, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: 200, rotateY: 45 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="w-[30%] flex justify-center items-center mx-2"
            >
              <img
                src={images[farLeftIndex]}
                alt="Far Left"
                className="w-full h-full object-contain rounded-lg transform scale-80"
              />
            </motion.div>

            {/* Left Image */}
            <motion.div
              key={leftIndex}
              initial={{ opacity: 0, x: -200, rotateY: -45 }}
              animate={{ opacity: 0.75, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: 200, rotateY: 45 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="w-[50%] flex justify-center items-center mx-2"
            >
              <img
                src={images[leftIndex]}
                alt="Left"
                className="w-full h-full object-contain rounded-lg transform scale-90"
              />
            </motion.div>

            {/* Center Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -200, rotateY: -45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: 200, rotateY: 45 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="w-[60%] flex justify-center items-center mx-2"
            >
              <img
                src={images[currentIndex]}
                alt="Current"
                className="w-full h-full object-contain rounded-lg transform scale-100"
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              key={rightIndex}
              initial={{ opacity: 0, x: -200, rotateY: -45 }}
              animate={{ opacity: 0.75, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: 200, rotateY: 45 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="w-[50%] flex justify-center items-center mx-2"
            >
              <img
                src={images[rightIndex]}
                alt="Right"
                className="w-full h-full object-contain rounded-lg transform scale-90"
              />
            </motion.div>

            {/* Far Right Image */}
            <motion.div
              key={farRightIndex}
              initial={{ opacity: 0, x: -200, rotateY: -45 }}
              animate={{ opacity: 0.5, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: 200, rotateY: 45 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="w-[30%] flex justify-center items-center mx-2"
            >
              <img
                src={images[farRightIndex]}
                alt="Far Right"
                className="w-full h-full object-contain rounded-lg transform scale-80"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
          style={{ zIndex: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
          style={{ zIndex: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

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
            } transition-transform duration-300 ease-in-out hover:scale-110`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;