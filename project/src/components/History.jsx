import React from 'react';
import './index.css';
import HistoryPhoto from '../images/HistoryPhoto.png';



const History = () => {

  return (
    <>
    <div className="bg-[#6A7339] w-screen"> 
    <div className="text-[#FAF5F0] flex flex-col lg:flex-row items-center justify-center gap-8 pt-12 pb-12 mx-auto lg:w-3/4 mt-8">
      <div className="flex flex-col gap-8 lg:max-w-[50%]">
        <h1 className="pb-4 text-5xl font-bold gabarito-header text-center lg:text-left max-sm:text-4xl  md:pb-4">
        HISTORY
        </h1>
        <p className="dongle-regular mr-7 max-lg:max-w-md text-left max-lg:mx-14">
        The lambanog production in Barangay Wakas, Tayabas, dates back to the 1960s when it was initially produced by a single manufacturer. In 1983, Capistrano Distillery was founded by the late Ireneo A. Capistrano, a graduate of BS Chemical Engineering, who saw the potential in the business. <br /> <br /> The business continued to grow, and after Ireneo’s death in 1990, his wife took over the operations. It wasn’t until 1999 that various government agencies began to aggressively help lambanog business owners. The Department of Trade and Industry (DTI) initiated the Brand Development Program for Lambanog, inviting distillers to participate. Only three, including Mallari, Buncayo, and Capistrano, completed the program requirements. In 2021, unfortunately, Mrs. Isabelita O. Capistrano, has passed away. Since then, Capistrano Distillery is being managed by her children.
        </p>
      </div>
      <div className="flex-shrink-0 relative mt-12 max-md:mt-4 max-sm:w-7/12 sm:w-5/12 md:w-5/12 lg:w-5/12 2xl:w-3/12 max-md:mx-14 max-sm:1/4">
        <img src={HistoryPhoto} alt="about" className="w-full object-cover" />
      </div>
    </div>
    </div>
    </>
  );
};

export default History;
