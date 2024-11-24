import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import "animate.css/animate.compat.css";
import FlipCard from './FlipCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#6A7339", // Arrow color
        borderRadius: "60%",
      }}
      onClick={onClick}
    />
  );
}

const Product = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); 
    };

    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize); 

    return () => window.removeEventListener('resize', checkScreenSize); 
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#6A7339] w-screen"> 
      <div className="flex flex-col pt-12 pb-0 items-center lg:w-full mx-auto mt-8 gap-8">
        <div className="text-[#FAF5F0] lg:px-12 sm:px-8 space-y-8 flex flex-col items-center lg:items-start pt-0">
          
            <h1 className="gabarito-header text-center lg:text-left max-sm:text-3xl text-5xl font-bold">OUR PRODUCTS</h1>
          
          <div className="max-lg:hidden flex flex-col lg:flex-row justify-center items-center w-full px-8 lg:px-0 md:pt-8 pb-8 gap-12">
            <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-lg:contents lg:hidden'>
      <style>{"\
        .slick-dots{\
          transform: translateY(-10px);\
        }\
      "}</style>
      <div className="w-3/4 mx-auto">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="mt-20 mb-20 flex justify-center items-center"
            >
              <div className="partner-card">
              <div className="w-full lg:w-auto flex flex-col items-center card-hover">
              <FlipCard />
              <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
            </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
      <div className="w-full justify-center lg:justify-end flex flex-col pt-12 pb-12 items-center lg:w-full mx-auto gap-8">
      <Link to="/Products">
            <button className="duration-300 text-[#FAF5F0] gabarito-regular border border-[#FAF5F0] py-2 px-4 rounded-md hover:bg-[#FAF5F0] hover:text-[#3F3D35]">
              SEE ALL PRODUCTS →
            </button>
      </Link>
          </div>
    </div>
  );
};

const data = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
];

export default Product;
