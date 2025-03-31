"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureItem = ({ icon, title, description, delay }: {icon: any, title:string, description: string, delay: number}) => {
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-start">
        <div className="text-orange-500 mr-4 mt-1 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-lightMode-background-main dark:bg-darkMode-background-main text-lightMode-text-main dark:text-darkMode-text-main relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Image */}
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/landing/phone-front.svg"
                  alt="Mobile App Features"
                  width={350}
                  height={700}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Features Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-orange-500 font-medium text-lg mb-2">FEATURES</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">
              Monitor. Secure. Optimize.

              </h3>
            </motion.div>

            {/* Feature Items */}
            <FeatureItem 
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.39 8.25H20L14.92 12.25L16.31 18.5L12 14.75L7.69 18.5L9.08 12.25L4 8.25H10.61L12 2Z" fill="currentColor" strokeWidth="2" />
                </svg>
              }
              title="Real-Time Asset Tracking"
              description="Install our trackers in your fleet to access real-time data on asset usage and yield performance. Qualify for auto-based loans effortlessly."
              delay={0.2}
            />
            
            <FeatureItem 
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.5L8 20.5L19 12.5L5 9.5L12 6.5Z" fill="currentColor" />
                </svg>
              }
              title="Marketplace"
              description="An auto services marketplace offering verified auto parts and mechanic services for reliable, authentic solutions."
              delay={0.4}
            />
            
            <FeatureItem 
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
                  <path d="M7 12H17M7 8H17M7 16H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              title="Credit Rating System"
              description="Vendors build credit ratings by servicing customers, enabling access to auto loans while ensuring high-quality service."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;