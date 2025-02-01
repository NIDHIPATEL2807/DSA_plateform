import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQCard from './FAQCard'; // Import FAQCard component

const AnimatedFAQ = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  const faqs = [
    {
      question: 'What is DSA?',
      answer:
        'DSA stands for Data Structures and Algorithms, which are fundamental concepts for computer science and programming.',
    },
    {
      question: 'Why is DSA important for coding interviews?',
      answer:
        'Most coding interviews focus on problem-solving using data structures and algorithms, so strong DSA knowledge is crucial to succeed.',
    },
    {
      question: 'How do I start learning DSA?',
      answer:
        'Start by understanding basic data structures like arrays, linked lists, stacks, and queues. Then move on to more advanced topics like trees, graphs, and dynamic programming.',
    },
    {
      question: 'What is the difference between an array and a linked list?',
      answer:
        'An array is a collection of elements stored at contiguous memory locations, while a linked list is a collection of elements where each element points to the next.',
    },
    {
      question: 'What are sorting algorithms?',
      answer:
        'Sorting algorithms are techniques used to arrange elements in a specific order, such as ascending or descending. Common sorting algorithms include Bubble Sort, Merge Sort, and Quick Sort.',
    },
    {
      question: 'What is dynamic programming?',
      answer:
        'Dynamic programming is an optimization technique used to solve complex problems by breaking them down into simpler subproblems and solving each subproblem only once.',
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-MarvelFont"
      >
        DSA Preparation FAQs
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <FAQCard key={faq.question} {...faq} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedFAQ;
