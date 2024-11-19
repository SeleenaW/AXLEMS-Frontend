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

  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % images.length) + images.length) % images.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 5 items visible at the same time
  const visibleItems = [...images, ...images].slice(
    indexInArrayScope,
    indexInArrayScope + 5
  );

  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  const handlePrev = () => {
    handleClick(-1);
  };

  const handleNext = () => {
    handleClick(1);
  };

  const getImageIndex = (item) => {
    switch (item) {
      case visibleItems[0]:
        return 'left';
      case visibleItems[1]:
        return 'leftCenter';
      case visibleItems[2]:
        return 'center';
      case visibleItems[3]:
        return 'rightCenter';
      case visibleItems[4]:
        return 'right';
      default:
        return 'right';
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => [prevIndex[0] + 1, 1]);
    }, 6000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
            {visibleItems.map((item, itemIndex) => (
              <motion.div
                id={getImageIndex(item)}
                className={`card ${getImageIndex(item)} w-[30%] flex justify-center items-center mx-2`}
                key={item}
                layout
                custom={{
                  slidePosition: getImageIndex(item),
                  direction,
                  position: () => getImageIndex(item),
                }}
                variants={variants(windowWidth)}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
                onClick={() => {
                  setActiveIndex([itemIndex, 0]);
                }}
              >
                <img
                  src={item}
                  alt="carousel"
                  className="w-full h-full object-contain rounded-lg"
                />
              </motion.div>
            ))}
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
            onClick={() => setActiveIndex([index, 0])}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === activeIndex[0]
                ? 'bg-black'
                : 'bg-gray-300 hover:bg-gray-400'
            } transition-transform duration-300 ease-in-out hover:scale-110`}
          ></button>
        ))}
      </div>
    </div>
  );
}

const variants = (windowWidth) => ({
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction, slidePosition }) => {
    return {
      ...getCenterXPosition(slidePosition, windowWidth),
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.5, x: 0, opacity: 0 };
  },
});

const getCenterXPosition = (slidePosition, windowWidth) => {
  const baseX = windowWidth / 2;
  switch (slidePosition) {
    case 'left':
      return {
        x: baseX * 1.4,
        zIndex: 1,
        scale: 0.6,
        opacity: 0.7,
      };
    case 'right':
      return {
        x: -baseX * 1.4,
        zIndex: 1,
        scale: 0.6,
        opacity: 0.7,
      };
    case 'leftCenter':
      return {
        x: baseX * 0.75,
        zIndex: 2,
        scale: 0.8,
        opacity: 1,
      };
    case 'rightCenter':
      return {
        x: -baseX * 0.75,
        zIndex: 2,
        scale: 0.8,
        opacity: 1,
      };
    case 'center':
      return {
        x: 0,
        zIndex: 3,
        scale: 1.4,
        opacity: 1,
      };
    default:
      return {
        x: 0,
        zIndex: 3,
      };
  }
};

export default Carousel;