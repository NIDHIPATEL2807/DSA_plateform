import { BookOpen, Facebook, Github, Star, Users, Youtube } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TestimonialCard from '../components/Home/TestimonialCard';

const HomePage = () => {
  const navigate = useNavigate();
  const handleStart = () =>{
    navigate('/dashboard')
  }
  const features = [
    {
      title: "Visual Algorithm Simulations",
      description: "Watch algorithms come to life with interactive visualizations",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Progress Tracking",
      description: "Track your learning journey with detailed analytics",
      icon: <Star className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Community Learning",
      description: "Learn and grow with our 250K+ community members",
      icon: <Users className="w-8 h-8 text-green-500" />
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Software Engineer",
      content: "This platform transformed my DSA learning journey. The visualizations made complex concepts crystal clear."
    },
    {
      name: "Sarah Miller",
      role: "CS Student",
      content: "The interactive problems and community support helped me crack my dream company's interview."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Master DSA Through Interactive Learning
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join 250,000+ learners mastering algorithms with visual simulations and personalized learning paths
            </p>
            <button onClick={handleStart} className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

<TestimonialCard/>
      {/* Connect Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Connect With Our Community</h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <Github className="w-8 h-8" />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600">
            <Youtube className="w-8 h-8" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-800">
            <Facebook className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How does the platform work?</h3>
              <p className="text-gray-600">Our platform combines interactive visualizations, practice problems, and community support to help you master DSA concepts effectively.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Is there integration with LeetCode?</h3>
              <p className="text-gray-600">Yes, you can connect your LeetCode account to track your progress and get personalized problem recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;