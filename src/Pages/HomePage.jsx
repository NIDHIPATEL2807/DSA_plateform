import React from 'react'
import ButtonOne from "../components/ui/ButtonOne"


const HomePage = () => {
  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800">
        सीखो DSA, <span className="text-blue-600">Practice Like a CodeJeet!</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Uffer from 8,000+ company-wise LeetCode questions like a true Codejeet. 
        <br />क्यूंकि नौकरी के लिए सब कुछ चलेगा! 🚀
      </p>
      <ButtonOne className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700">
        Get Started
      </ButtonOne>
    </div>
  )
}

export default HomePage