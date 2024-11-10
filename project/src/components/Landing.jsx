import React from 'react';
import '../index.css';
import landing from '../images/landing.png';
import placeholder from '../images/placeholder.png';

console.log(landing);
console.log(placeholder);

const Landing = () => {
  return (
    <>
      <div>
        <img src={landing} alt="Landing" />
      </div>

      <div className="flex flex-col pt-12 md:flex-row items-center md:items-start md:w-3/4 mx-auto mt-8 gap-8">
        <div className="relative">
          <div className="absolute inset-0 bg-[#D4C0A3] rounded-md -top-4 -left-4"></div>
          <img className="relative z-10 rounded-md shadow-lg" src={placeholder} alt="Placeholder" />
          <button className="absolute inset-0 flex items-center justify-center text-white bg-[#5E5A53] opacity-80 hover:opacity-100 rounded-md">
            <svg className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <div className="text-[#E0C9AC] px-6 space-y-12">
          <h1 className="gabarito-header text-left text-3xl font-bold">Our Story</h1>
          <p className='dongle-regular '>
            Capistrano Distillery has been crafting Lambanog, a traditional Filipino distilled palm liquor, since 1983. Founded by Ireneo A. Capistrano, a chemical engineer, the distillery grew under the guidance of his family and gained recognition in the industry. Today, Capistrano Distillery continues to uphold its legacy, and in 2024, Quezon lambanog was named the 2nd best spirit in the world by TasteAtlas.com, bringing pride to the Philippines.
          </p>
          <button className="text-[#E0C9AC] dongle-regular border border-[#E0C9AC] py-2 px-4 rounded-md hover:bg-[#E0C9AC] hover:text-[#3F3D35]">
            Learn More →
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
