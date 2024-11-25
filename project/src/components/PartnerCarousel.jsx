import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/logo6.png';
import logo7 from '../images/logo7.png';
import logo8 from '../images/logo8.png';

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
    <div className="bg-[#F0ECE1] w-full  m-0 pb-16 pt-8">
      <style>{"\
        .slick-dots{\
          transform: translateY(10px);\
        }\
      "}</style>
      <div className="w-3/4 mx-auto ">
  <Slider {...settings}>
    {data.map((d) => (
      <div
        key={d.name}
        className="flex justify-center items-center"
      >
        <div className="h-auto"> {/* Adjusted */}
          <a 
            href={d.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dongle-regular"
          >
            <img 
              src={d.image} 
              alt={`Partner ${d.name}`} 
              className="rounded-2xl max-md:w-2/3 md:w-3/4 lg:w-3/4" 
              style={{ height: "auto", objectFit: "cover", margin: "auto" }}
            />
          </a>
        </div>
      </div>
    ))}
  </Slider>
</div>

    </div>
  );
}

const data = [
  { name: 1, image: logo1, link:"https://tayabas.gov.ph/" },
  { name: 2, image: logo2, link:"https://pca.gov.ph/index.php/10-news" },
  { name: 3, image: logo3, link:"https://www.kulturafilipino.com/" },
  { name: 4, image: logo4},
  { name: 5, image: logo5, link:"https://m.facebook.com/tourismoftayabascity/videos/" },
  { name: 6, image: logo6, link:"https://www.fda.gov.ph/"},
  { name: 7, image: logo7, link:"https://www.dti.gov.ph/" },
  { name: 8, image: logo8, link:"https://www.dost.gov.ph/" },
];


export default PartnerCarousel;
