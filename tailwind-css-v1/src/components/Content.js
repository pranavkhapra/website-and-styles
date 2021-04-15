import React from 'react';
import imageOne from '../images/egg.jpg';
import imageTwo from '../images/egg1.jpg';

function Content() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white font-mono h-screen py-40">
        <img
          src={imageOne}
          alt="egg1"
          className="h-full rounded shadow mb-16"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy,delicious and nutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white font-mono h-screen py-40">
        <img
          src={imageTwo}
          alt="egg2"
          className="h-full rounded shadow mb-16"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Crispy,delicious and nutritious</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
}

export default Content;
