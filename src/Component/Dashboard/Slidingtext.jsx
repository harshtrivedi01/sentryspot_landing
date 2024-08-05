// import React from 'react';
// import './SlidingText.css';
// import { Link } from 'react-router-dom';

// const SlidingText = () => {
//   return (
//     <div className="overflow-hidden ">
//       <div className="animate-slide flex gap-3 w-[980px] shadow-xl rounded-xl px-4 py-2 ">
//         <div className=" px-2 py-2 rounded-xl shadow-xl  ">Welcome to Abroadium’s Futuristic & AI Enabled Dashboard</div>
//         <div className=" px-2  py-2 rounded-xl shadow-xl  ">We are live with our AI Resume Building Tool</div>
//         <div className=" px-2  py-2 rounded-xl shadow-xl  ">Resumes crafted by Industry Experts</div>
//         <div className=" px-2  py-2 rounded-xl shadow-xl  ">Verified International Jobs, Companies, Feed & more </div>
//         <div className=" px-2  py-2 rounded-xl shadow-xl  ">Your One Stop Career Solutions here </div>
//         <Link to='https://blog.abroadium.com/category/candidate-resources/'>
//         <div className=" px-2  py-2 rounded-xl shadow-xl   font-bold text-sky-400">Subscribe Here </div>
//         </Link>       
//       </div>
//     </div>
//   );
// };

// export default SlidingText;


import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './SlidingText.css';

const images = [
  {title:"Sentry Spot Futuristic & AI Enabled Dashboard"},
  {title:"We are live with our AI Resume Building Tool"},
  {title:"Resumes crafted by Industry Experts"},
  {title:"Verified International Jobs, Companies, Feed & more"},
  {title:"Your One Stop Career Solutions here "},
  {title:"Subscribe Here"},

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
      <div className="relative flex  justify-center  items-center align-middle  w-full md:w-[100%] h-44 md:h-[80px] mx-auto">
        {/* <FaArrowLeft
          className="absolute top-1/2 left-2 md:left-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
          onClick={prevSlide}
        /> */}
        {/* <FaArrowRight
          className="absolute top-1/2 right-2 md:right-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
          onClick={nextSlide}
        /> */}
        <div className="slider-container-dash text-blue-950">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide-dash ${index === currentIndex ? 'active' : ''} ${direction}`}
            >
              <div className="w-full h-full rounded-3xl text-center flex items-center align-middle justify-center text-2xl font-bold" > {image.title} </div>
            </div>
          ))}
        </div>
        {/* <div className="absolute bottom-4 flex justify-center w-full">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default ImageSlider;
