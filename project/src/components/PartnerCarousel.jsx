import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

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

function PartnerCarousel() {
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
    <div className="bg-[#F0ECE1] w-full m-0 pb-12">
      <div className="w-3/4 mx-auto">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="mt-20 mb-20 flex justify-center items-center"
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
  );
}

const data = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
];

export default PartnerCarousel;
