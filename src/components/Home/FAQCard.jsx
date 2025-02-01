import React, { useState } from 'react';

const FAQCard = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false); // Track the open/close state of the answer

  const toggleAnswer = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={index * 100}
      className="bg-blue-900 text-white p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
    >
      <h2
        className="text-xl font-semibold mb-4 cursor-pointer"
        onClick={toggleAnswer} // Toggle the answer on click
      >
        {question}
      </h2>

      {/* Dropdown effect for answer */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`}
      >
        <p className="text-base">{answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
