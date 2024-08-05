import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import './Slider.css';

const images = [
  image1,
  image2,
  image3,
  image4,
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const prevSlide = () => {
    setDirection('left');
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setDirection('right');
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => {
      clearInterval(autoPlay);
    };
  }, [currentIndex]);

  return (
    <>
      <h1 className="text-center text-4xl py-3 font-bold">Explore Our AI Enabled Resume Services</h1>
      <div className="relative flex justify-center items-center w-full md:w-[100%] h-64 md:h-[600px] mx-auto">
        <FaArrowLeft
          className="absolute top-1/2 left-2 md:left-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
          onClick={prevSlide}
        />
        <FaArrowRight
          className="absolute top-1/2 right-2 md:right-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
          onClick={nextSlide}
        />
        <div className="slider-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''} ${direction}`}
            >
              <img src={image} alt={`Slide ${index}`} className=" rounded-3xl border " />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 flex justify-center w-full">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
