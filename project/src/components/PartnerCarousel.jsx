import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function PartnerCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="bg-[#F0ECE1] w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div  className="h-[450px] flex justify-center items-center">
              <div className="partner-card">
                <div>
                  <div className="partner-card-front">
                    <div>Placeholder Image</div>
                  </div>

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
  { name: 5 }
];

export default PartnerCarousel;