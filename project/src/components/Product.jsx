import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import "animate.css/animate.compat.css";
import FlipCard from './FlipCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeProd1 from '../images/HomeProd1.jpg';
import HomeBackProd1 from '../images/HomeBackProd1.png';
import HomeProd2 from '../images/HomeProd2.png';
import HomeBackProd2 from '../images/HomeBackProd2.png';
import HomeProd3 from '../images/HomeProd3.png';
import HomeBackProd3 from '../images/HomeBackProd3.png';

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

  const data = [
    { name: "PHILLIPINE LAMBANOG BOX", image: HomeProd1, backImage: HomeBackProd1 },
    { name: "PLAIN LAMBANOG (WITH RATTAN)", image: HomeProd2, backImage: HomeBackProd2 },
    { name: "LIPUTI LAMBANOG", image: HomeProd3, backImage: HomeBackProd3 },
  ];

  return (
    <div className="bg-[#6A7339] w-screen"> 
      <div className="flex flex-col pt-12 pb-0 items-center lg:w-full mx-auto mt-8 gap-8">
        <div className="text-[#FAF5F0] lg:px-12 sm:px-8 space-y-8 flex flex-col items-center lg:items-start pt-0">
          <h1 className="gabarito-header text-center lg:text-left max-sm:text-3xl text-5xl font-bold">OUR PRODUCTS</h1>
          <div className="max-lg:hidden flex flex-col lg:flex-row justify-center items-center w-full px-8 lg:px-0 md:pt-8 pb-8 gap-12">
            {data.map((product, index) => (
              <div key={index} className="w-full lg:w-auto flex flex-col items-center card-hover">
                <FlipCard 
                  frontImage={product.image} 
                  backImage={product.backImage} 
                />
                <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-lg:contents lg:hidden">
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
                className="mt-20 mb-20 flex justify-center items-center "
              >
                <div className="partner-card ">
                  <div className="w-full lg:w-auto flex flex-col items-center card-hover">
                    <FlipCard 
                      frontImage={d.image} 
                      backImage={d.backImage} 
                    />
                    <p className="text-[#FAF5F0] text-center text-lg mt-4 gabarito-regular">{d.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-full justify-center lg:justify-end flex flex-col pt-8 max-lg:pt-16 pb-16 items-center lg:w-full mx-auto gap-8">
        <Link to="/Products">
          <button className="duration-300 text-[#FAF5F0] gabarito-regular border border-[#FAF5F0] py-2 px-4 rounded-md hover:bg-[#FAF5F0] hover:text-[#3F3D35]">
            SEE ALL PRODUCTS →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
