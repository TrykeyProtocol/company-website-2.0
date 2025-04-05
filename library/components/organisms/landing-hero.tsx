"use client";

import React from "react";
import Image from "next/image";
import Button from "../atoms/button";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/library/utils";


const LandingSection: React.FC = () => {
  return (
    <section className="bg-lightMode-background-main dark:bg-darkMode-background-main text-lightMode-text-main dark:text-darkMode-text-main relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-24 left-24">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute bottom-24 right-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute top-1/2 right-24">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8L12 0Z" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-lightMode-text-heading dark:text-darkMode-text-heading">
              Tracker-Based
              <br />
              Credit Rating For
              <br />
              Commercial Auto
              <br />
              Repair Lending
            </h1>
            <p className="text-lg md:text-xl mb-8 text-lightMode-text-secondary dark:text-darkMode-text-secondary">
              Empowering Your Lending Decisions With Data-Driven Insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="large" 
                href="/" 
                className="rounded-md flex items-center justify-center bg-lightMode-brand-primary hover:bg-lightMode-brand-primary/90 text-white py-3 px-6"
              >
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
              
              <Button 
                variant="secondary" 
                size="large" 
                href="/#how-it-works"
                className="flex items-center justify-center bg-transparent "
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center mr-3 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-orange-600 dark:text-orange-500 font-medium">Watch Video</span>
                </div>
              </Button>
            </div>
          </motion.div>

          {/* Phone Images */}
          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >

            <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
              {/* Right phone (Investment Overview) */}
              <motion.div
                className="absolute right-0 lg:right-0 z-10"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="relative ">
                  <Image
                    src="/images/landing/hero.svg"
                    alt="Investment Overview"
                    width={900}
                    height={640}
                  />
                </div>
              </motion.div>
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;