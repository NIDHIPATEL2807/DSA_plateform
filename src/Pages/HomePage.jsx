import Spline from '@splinetool/react-spline';
import { BookOpen, Facebook, Github, Star, Users, Youtube } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedFAQ from '../components/Home/AnimatedFAQ';
import TestimonialCard from '../components/Home/TestimonialCard';
import Card from '../components/Home/Card';

const HomePage = () => {
  const navigate = useNavigate()
  const features = [
    {
      title: 'Visual Algorithm Simulations',
      description: 'Watch algorithms come to life with interactive visualizations.',
      icon: <BookOpen className='w-10 h-10 text-[#F7E987]' />,
    },
    {
      title: 'Progress Tracking',
      description: 'Track your learning journey with detailed analytics.',
      icon: <Star className='w-10 h-10 text-[#F7E987]' />,
    },
    {
      title: 'Community Learning',
      description: 'Learn and grow with our 250K+ community members.',
      icon: <Users className='w-10 h-10 text-[#F7E987]' />,
    },
    // Added new features
    {
      title: 'Chatbot Support',
      description: 'Get instant help and guidance with our AI-powered chatbot.',
      icon: <Github className='w-10 h-10 text-[#F7E987]' />, // You can replace with an appropriate icon
    },
    {
      title: 'DSA Sheet',
      description: 'Access a curated collection of DSA problems for practice.',
      icon: <BookOpen className='w-10 h-10 text-[#F7E987]' />, // Use a different icon or keep the same
    },
    {
      title: 'Profile Calendar',
      description: 'Stay on top of your schedule with the integrated calendar.',
      icon: <Star className='w-10 h-10 text-[#F7E987]' />, // You can choose a different icon if you prefer
    },
  ];

  const handleStart = () => {
    navigate('/dashboard')
  }

  return (
    <div className='h-full w-full m-0 p-0 relative text-white'>
      {/* Spline 3D Background with Animation */}
      <div className='absolute inset-0 w-full h-full -z-20'>
        <Spline scene='https://prod.spline.design/JeNulpnRHRvS75lO/scene.splinecode' />
      </div>
      
      {/* Hero Section */}
      <div className='py-24 flex flex-col items-center text-center px-6'>
        <h1 className='text-5xl font-bold mb-6'>Master DSA Through Interactive Learning</h1>
        <p className='text-2xl mb-8 max-w-3xl'>Join 250,000+ learners mastering algorithms with visual simulations and personalized learning paths.</p>
        <button onClick = {handleStart} className='bg-[#F7E987] text-[#252B48] px-10 py-4 rounded-lg text-lg font-medium hover:bg-yellow-500 transition-all'>
          Start Learning Now
        </button>
      </div>

      {/* Features Section */}
      <div className='py-24 px-6 text-center' data-aos="fade-up">
        <h2 className='text-4xl font-bold mb-12'>Why Choose Us</h2>
        <div className='flex flex-wrap justify-center gap-12'>
          {features.map((feature, index) => (
            <div key={index} className='bg-opacity-30 p-8 rounded-xl shadow-lg w-80 backdrop-blur-md' data-aos="flip-left">
              <div className='mb-6 flex justify-center'>{feature.icon}</div>
              <h3 className='text-2xl font-semibold mb-4'>{feature.title}</h3>
              <p className='text-lg'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories Section */}
      <div className='py-24 px-6 text-center' data-aos="zoom-in">
        <h2 className='text-4xl font-bold mb-12'>Success Stories</h2>
        {/* Card component for success stories */}
        <div className="flex justify-center gap-26">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Connect Section */}
      <div className='py-24 px-6 text-center' data-aos="fade-up">
        <h2 className='text-4xl font-bold mb-12'>Connect With Our Community</h2>
        <div className='flex justify-center space-x-8'>
          <a href='#' className='text-white hover:text-gray-300 transition-all'>
            <Github className='w-10 h-10' />
          </a>
          <a href='#' className='text-white hover:text-gray-300 transition-all'>
            <Youtube className='w-10 h-10' />
          </a>
          <a href='#' className='text-white hover:text-gray-300 transition-all'>
            <Facebook className='w-10 h-10' />
          </a>
        </div>
      </div>

      <AnimatedFAQ />
    </div>
  );
};

export default HomePage;
