import React, { useState, useEffect } from 'react';
import './index.css';
import "animate.css/animate.compat.css";
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


const CustomerReviews = () => {
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
    <div className="bg-[#6A7339] w-screen m-0 pb-12">
      <style>
        {`
          .slick-dots {
            transform: translateY(-10px);
          }
        `}
      </style>
      <div className="flex flex-col pt-12 pb-0 items-center mx-auto mt-8 gap-8">
        {/* Customer Reviews Header */}
        <div className="text-[#FAF5F0] w-3/4 mx-auto space-y-8 flex flex-col pt-0">
          <h1 className="gabarito-header lg:text-left text-center text-5xl font-bold max-sm:text-4xl">
            CUSTOMER REVIEWS
          </h1>
        </div>
  
        {/* Carousel */}
        <div className="w-3/4 mx-auto">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="mt-20 mb-14 flex justify-center items-center"
              >
                <div className="partner-card">
                  <div className="partner-card-front dongle-regular">
                    <div>Placeholder Image</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
  
}

const data = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
];

export default CustomerReviews;
