
import React from 'react';
import '../index.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"



const Product = () => {
  return (
    <>
      <div className="flex flex-col pt-12 pb-12 items-center lg:flex-row lg:w-3/4 mx-auto mt-8 gap-8">

      <div className="bg-[#6A7339] flex flex-col pt-12 pb-12 items-center lg:flex-row lg:w-3/4 mx-auto mt-8 gap-8">

        <div className="text-[#E0C9AC] lg:px-12 sm:px-8 space-y-8 flex flex-col items-center lg:items-start pt-0">
        <ScrollAnimation animateIn="fadeIn">
          <h1 className="gabarito-header text-center lg:text-left text-5xl font-bold">OUR STORY</h1>
          <p className="dongle-regular max-w-md text-center lg:text-left">
            Capistrano Distillery has been crafting Lambanog, a traditional Filipino distilled palm liquor, since 1983. Founded by Ireneo A. Capistrano, a chemical engineer, the distillery grew under the guidance of his family and gained recognition in the industry. Today, Capistrano Distillery continues to uphold its legacy, and in 2024, Quezon lambanog was named the 2nd best spirit in the world by TasteAtlas.com, bringing pride to the Philippines.
          </p>
          </ScrollAnimation>
          <button className="duration-300 text-[#E0C9AC] gabarito-regular border border-[#E0C9AC] py-2 px-4 rounded-md hover:bg-[#E0C9AC] hover:text-[#3F3D35]">
            LEARN MORE →
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Product;