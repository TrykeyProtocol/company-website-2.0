"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data
const faqItems = [
  {
    id: 1,
    question: "How To Download The App?",
    answer: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,"
  },
  {
    id: 2,
    question: "How Does The Tracking System Work?",
    answer: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,"
  },
  {
    id: 3,
    question: "What Types Of Vehicles Are Supported?",
    answer: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,"
  },
  {
    id: 4,
    question: "How Secure Is My Vehicle Data?",
    answer: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,"
  },
  {
    id: 5,
    question: "What Payment Methods Are Accepted?",
    answer: "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,"
  }
];

// Define types for FAQ item
interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

// Define types for FAQItem component props
interface FAQItemProps {
  item: FAQItemType;
  isOpen: boolean;
  toggleAccordion: (id: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, toggleAccordion }) => {
  return (
    <div className={`mb-6 rounded-xl overflow-hidden ${isOpen ? 'bg-lightMode-brand-primary dark:bg-darkMode-brand-accent text-white' : 'bg-white dark:bg-darkMode-background-alternate border border-gray-200 dark:border-darkMode-brand-secondary '}`}>
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={() => toggleAccordion(item.id)}
      >
        <h3 className="text md:text-lg font-bold">{item.question}</h3>
        <div className="relative w-6 h-6 flex-shrink-0">
          <span className={`absolute top-1/2 left-0 w-6 h-0.5 ${isOpen ? 'bg-white' : 'bg-lightMode-text-heading dark:bg-darkMode-text-heading'} transform -translate-y-1/2`}></span>
          <span className={`absolute top-1/2 left-0 w-6 h-0.5 ${isOpen ? 'bg-white' : 'bg-lightMode-text-heading dark:bg-darkMode-text-heading'} transform -translate-y-1/2 ${isOpen ? 'rotate-0' : 'rotate-90'}`}></span>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(1); // First item open by default

  const toggleAccordion = (itemId: number) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section className="bg-lightMode-background-main dark:bg-darkMode-background-main py-16 md:py-24 relative overflow-hidden">
      {/* Decorative stars and circles */}
      <div className="absolute top-20 right-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8L12 0Z" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-1/3">
        <div className="w-60 h-60 rounded-full border border-gray-200 dark:border-gray-700 opacity-10"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/4">
        <div className="w-40 h-40 rounded-full border border-gray-200 dark:border-gray-700 opacity-5"></div>
      </div>
      <div className="absolute top-3/4 left-1/3">
        <div className="w-80 h-80 rounded-full border border-gray-200 dark:border-gray-700 opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-lightMode-brand-primary dark:text-darkMode-brand-accent font-medium text-lg">FAQ</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lightMode-text-heading dark:text-darkMode-text-heading">
            Frequently Asked Questions
          </h3>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openItem === item.id}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;