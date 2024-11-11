import React from 'react';
import '../index.css';
import landing from '../images/landing.png';
import landvid from '../images/landvid.mp4';

const Landing = () => {
  return (
    <>
      <div>
        <img src={landing} alt="Landing" />
      </div>

      <div className="flex flex-col pt-12 pb-12 items-center lg:flex-row lg:w-3/4 mx-auto mt-8 gap-8">
        <div className="rounded-lg relative w-3/4 sm:w-2/3 lg:w-1/2">
          <video className='rounded-[40px]' controls autoPlay loop muted>
            <source src={landvid} type="video/mp4"></source>
          </video>
        </div>

        <div className="text-[#E0C9AC] px-6 sm:px-8 lg:px-0 space-y-8 flex flex-col items-center lg:pt-12 lg:items-start pt-0">
          <h1 className="gabarito-header text-center lg:text-left text-5xl font-bold">OUR STORY</h1>
          <p className="dongle-regular max-w-md text-center lg:text-left">
            Capistrano Distillery has been crafting Lambanog, a traditional Filipino distilled palm liquor, since 1983. Founded by Ireneo A. Capistrano, a chemical engineer, the distillery grew under the guidance of his family and gained recognition in the industry. Today, Capistrano Distillery continues to uphold its legacy, and in 2024, Quezon lambanog was named the 2nd best spirit in the world by TasteAtlas.com, bringing pride to the Philippines.
          </p>
          <button className="duration-300 text-[#E0C9AC] gabarito-regular border border-[#E0C9AC] py-2 px-4 rounded-md hover:bg-[#E0C9AC] hover:text-[#3F3D35]">
            LEARN MORE →
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
