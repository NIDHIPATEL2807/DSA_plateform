import React from 'react';
import ButtonOne from "../components/ui/ButtonOne";
import SplineComponent from "../components/Home/SplineComponent";

const HomePage = () => {
  return (
    <div className="relative text-center min-h-screen flex flex-col justify-center items-center">
      {/* Spline component as the background */}
      <SplineComponent />
      
      {/* Content */}
      <div className="relative z-10 px-4 py-10 text-white flex flex-col items-center justify-center">
        {/* Title Code<karo> */}
        <h1 className="text-6xl font-bold font-serif text-white mb-6">
          Code<span className="text-blue-600">karo</span>
        </h1>

        {/* Main heading */}
        <h2 className="text-5xl font-bold font-serif text-white">
          सीखो DSA, <span className="text-blue-600">Practice Like a CodeJeet!</span>
        </h2>

        {/* Description text */}
        <p className="mt-8                              text-xl text-gray-300">
          Uffer from 8,000+ company-wise LeetCode questions like a true Codejeet. 
          <br />क्यूंकि नौकरी के लिए सब कुछ चलेगा! 🚀
        </p>
        <br />
        <br />
        <br />
        {/* Button */}
        <ButtonOne className="mt-20 px-8 py-7 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 mx-auto">
          Get Started         
        </ButtonOne>
      </div>
    </div>
  );
};

export default HomePage;
