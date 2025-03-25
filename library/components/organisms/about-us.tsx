"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Placeholder data for the four user types
const userTypes = [
  {
    id: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
      </svg>
    ),
    title: "Mechanics",
    subtitle: "Grow Your Rating, Qualify For Auto Equipment Credit",
    description: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,",
    phoneImage: "/images/landing/phone-front.svg"
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 11V13H6V11H18ZM20 4H4V22H20V4ZM22 2V24H2V2H22ZM18 7V9H6V7H18Z" fill="white"/>
      </svg>
    ),
    title: "Fleet Managers",
    subtitle: "Install Our Trackers & Get Immediate Working Capital",
    description: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,",
    phoneImage: "/images/landing/phone-front.svg"
  },
  {
    id: 3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H4V19H20V7ZM3 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5ZM9 9H7V11H9V9ZM7 13H9V15H7V13ZM13 9H11V11H13V9ZM11 13H13V15H11V13ZM17 9H15V11H17V9ZM15 13H17V15H15V13Z" fill="white"/>
      </svg>
    ),
    title: "Automobile part sellers",
    subtitle: "Real-Time Vehicle Data For Better Lending Decisions",
    description: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,",
    phoneImage: "/images/landing/phone-front.svg"
  },
  {
    id: 4,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 10H17V8H19V10ZM19 13H17V11H19V13ZM16 10H14V8H16V10ZM16 13H14V11H16V13ZM16 16H14V14H16V16ZM7 16V4H19V7H21V3C21 2.44772 20.5523 2 20 2H6C5.44772 2 5 2.44772 5 3V16H2V22H10V16H7ZM7 18H4V20H7V18ZM23 14H21V17H18V19H21V22H23V19H26V17H23V14Z" fill="white"/>
      </svg>
    ),
    title: "Liquidity providers",
    subtitle: "In-Depth Vehicle Health Reports For Better Inventory",
    description: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,",
    phoneImage: "/images/landing/phone-front.svg"
  }
];

const AdvantagesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Function to navigate to next slide
  const goToNext = () => {
    const nextIndex = (activeIndex + 1) % userTypes.length;
    navigateToSlide(nextIndex);
  };

  // Function to navigate to previous slide
  const goToPrev = () => {
    const prevIndex = (activeIndex - 1 + userTypes.length) % userTypes.length;
    navigateToSlide(prevIndex);
  };

  // Common navigation function
  const navigateToSlide = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  // Function to handle dot navigation
  const handleDotClick = (index: number) => {
    navigateToSlide(index);
  };

  // Handle scroll event to update active index
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < userTypes.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => {
        carousel.removeEventListener('scroll', handleScroll);
      };
    }
  }, [activeIndex]);

  return (
    <section className="bg-lightMode-background-main dark:bg-darkMode-background-main text-lightMode-text-main dark:text-darkMode-text-main relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute bottom-24 left-24">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-24">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8L12 0Z" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        {/* Static Title Section */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-lightMode-brand-primary dark:text-darkMode-brand-accent font-medium text-lg">ADVANTAGES</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lightMode-text-heading dark:text-darkMode-text-heading">
            Who It's For?
          </h3>
        </div>

        {/* Navigation Buttons for Desktop */}
        <div className="hidden md:flex justify-end mb-6 space-x-4">
          <button 
            onClick={goToPrev}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Carousel Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content Container */}
          <div 
            ref={carouselRef}
            className="w-full lg:w-1/2 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex">
              {userTypes.map((user, index) => (
                <div 
                  key={user.id}
                  className="min-w-full w-full flex-shrink-0 snap-center"
                >
                  <div className="pr-4 md:pr-8 lg:pr-12">
                    <div className="flex items-center mb-4">
                      <div className="bg-lightMode-brand-primary dark:bg-darkMode-brand-accent h-12 w-12 rounded-full flex items-center justify-center mr-4">
                        {user.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-lightMode-text-heading dark:text-darkMode-text-heading">{user.title}</h4>
                    </div>
                    <h5 className="text-xl font-bold mb-4 text-lightMode-text-heading dark:text-darkMode-text-heading">{user.subtitle}</h5>
                    <p className="text-lightMode-text-secondary dark:text-darkMode-text-secondary leading-relaxed">
                      {user.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Image with Animation */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Decorative circles */}
              <div className="absolute w-full h-full pointer-events-none">
                <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" fill="none" />
                  <circle cx="250" cy="250" r="170" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" fill="none" />
                  <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" fill="none" />
                </svg>
              </div>

              {/* Display the active phone image */}
              <div
                key={activeIndex}
                // initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -20 }}
                // transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image
                  src={userTypes[activeIndex].phoneImage}
                  alt={userTypes[activeIndex].title}
                  width={300}
                  height={600}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons for Mobile */}
        <div className="flex md:hidden justify-center mt-6 space-x-4">
          <button 
            onClick={goToPrev}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {userTypes.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-lightMode-text-heading dark:bg-darkMode-text-heading' : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;