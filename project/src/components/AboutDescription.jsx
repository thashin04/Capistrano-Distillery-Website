import React from 'react';
import './index.css';
import aboutplaceholder from '../images/AboutPlaceholder.png';

const AboutDescription = () => {
  return (
    <div className="text-[#E0C9AC] flex flex-col lg:flex-row items-center justify-center gap-8 pt-12 pb-12 mx-auto lg:w-3/4 mt-8">
      <div className="flex flex-col gap-8 lg:max-w-[50%]">
        <h1 className="pb-4 text-5xl font-bold gabarito-header text-center lg:text-left max-sm:text-3xl  md:pb-4">
          BACKGROUND
        </h1>
        <p className="dongle-regular mr-7 max-lg:max-w-md text-left max-lg:mx-14">
          Lambanog is a traditional and local Filipino distilled palm liquor. It is an alcoholic drink produced from distilling coconut sap (tuba). When consumed responsibly, it is not considered harmful to health, as it is a pure and natural product with no chemicals added. However, excessive alcohol consumption is detrimental to the body and should be avoided. <br /> <br /> Lambanog is not only popular in the Philippines but has also gained acceptance in Europe and other Asian countries through various promotional activities abroad. Due to its market potential, there are plans to expand the export of Lambanog-based products in the future.
        </p>
      </div>
      <div className="flex-shrink-0 relative mt-12 max-md:mt-4 sm:w-1/3 lg:w-5/12 max-md:mx-14 max-sm:1/4 ">
        <img src={aboutplaceholder} alt="about" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default AboutDescription;
