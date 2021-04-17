import React from 'react';
import planetOne from '../images/planet.svg';
import planetTwo from '../images/planet-2.svg';
import planetThird from '../images/planet-3.svg';
import planetFour from '../images/planet-4.svg';

function Hero() {
  return (
    <div className="bg-black h-screen flex justify-between">
      <div className="h-screen text-white flex flex-col justify-center items-start align-left ">
        <h1 className="sm:text-2xl md:text-4xl lg:text-16xl ml-32 mb-4">
          Welcome to Space
        </h1>
        <p className="sm:text-2xl md:text-4xl lg:text-16xl ml-32">
          Journey to the Unknown
        </p>
        <button
          className="bg-purple-500 py-4 px-4 mt-12 ml-48 rounded-lg"
          type="button"
        >
          Get Started
        </button>
      </div>
      <div className="h-screen flex flex-col justify-center items-center align-right">
        <img src={planetOne} alt="planet1" />
        <img src={planetTwo} alt="planet2" />
        <img src={planetThird} alt="planet3" />
        {/* <img src={planetFour} alt="planet4" /> */}
      </div>
    </div>
  );
}

export default Hero;
