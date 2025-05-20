import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why should you consider Sales Development-as-a-Service?",
      answer: "Extend your team with our world class sales development reps, dedicated to fueling your pipeline. IQconvert focuses on identifying, engaging, and qualifying potential business leads to build a robust sales pipeline. It involves reaching decision-makers, understanding their needs, and setting the stage for your sales team to convert leads into customers."
    },
    {
      question: "Is outsourced sales development suitable for my business?",
      answer: "Yes, if you want to scale your lead generation without the overhead of hiring and training an in-house team. Our service is ideal for businesses looking to expand their reach efficiently."
    },
    {
      question: "How do you ensure lead quality?",
      answer: "We use a multi-step qualification process including targeted research, personalized outreach, and thorough vetting to ensure only high-potential leads enter your pipeline."
    },
    {
      question: "What is it like working with pharosiQ on a sales development campaign?",
      answer: "You'll work with dedicated experts who become an extension of your team. We provide transparent reporting, regular syncs, and adapt our approach based on your feedback and results."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">IQconvert FAQs</h1>
        <h2 className="text-xl font-semibold text-gray-700">Why IQconvert?</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              className="w-full flex justify-between items-center p-4 sm:p-6 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-900 sm:text-xl">{faq.question}</h3>
              <span className="ml-4 flex-shrink-0">
                {activeIndex === index ? (
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                )}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 sm:px-6 pb-4 sm:pb-6"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;