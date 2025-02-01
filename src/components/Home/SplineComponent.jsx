import Spline from '@splinetool/react-spline';
import React from 'react';

const SplineComponent = () => {
  return (
    <Spline
      className="absolute top-0 left-0 w-full h-full"
      scene="https://prod.spline.design/JeNulpnRHRvS75lO/scene.splinecode"
      style={{
        zIndex: -1, // Ensure Spline stays in the background
        transform: 'scale(1.3)', // Adjust scale for zoom
        transformOrigin: 'center', // Keep zoom centered
      }}
    />
  );
};

export default SplineComponent;
