import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [images, setImages] = useState(['/images/home1.png', '/images/home2.jpg', '/images/home3.jpg','/images/home5.jpg']); // Array of image paths
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true); // Auto-play images

  // // Define your images array with their paths
  // useEffect(() => {
  //   setImages(['/images/home1.png', '/images/home2.jpg', '/images/home3.jpg','/images/home5.jpg']);
  // }, []);

  // Auto-play images
  useEffect(() => {
    let interval;
    if (isAutoPlayEnabled) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isAutoPlayEnabled, images.length]);

  // Handler for previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Handler for next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen" style={{zIndex:"1"}}>
      {/* Image Carousel */}
      {images.map((image, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={image} alt={`image-${index}`} layout="fill" objectFit="cover" />
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
            {/* Welcome Text */}
            <h1 className="text-black text-3xl font-bold mb-12 mt-12">Welcome to</h1>
            {/* Logo */}
            <div className="mb-12">
              <Image src="/images/welcome.png" alt="logo" width={250} height={250} />
            </div>
            {/* Explore Text */}
            <p className="text-4xl mb-12">Explore Like a Traveller<br />Stay like a Tourist</p>
            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <button className="bg-[#E0B279] text-black py-3 px-8 rounded-md border-radius-xl">Explore</button>
              <button className="bg-transparent border border-[#E0B279] text-white py-3 px-8 rounded-md">Book Now</button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button className="absolute top-1/2 left-12 text-white text-6xl" onClick={prevImage}>
        &lt;
      </button>
      <button className="absolute top-1/2 right-12 text-white text-6xl" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default HeroSection;
