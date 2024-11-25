import React from 'react';
import './index.css';

const PhilippinesToday = () => {
  return (
    <div className="text-[#E0C9AC] flex flex-col lg:flex-row items-center justify-center gap-8 pt-4 pb-12 mx-auto mt-0">
      <div className="flex flex-col gap-8 lg:max-w-[70%] max-lg:lg:max-w-[50%]">
        <h1 className="mx-auto pb-4 text-5xl font-bold gabarito-header text-center lg:text-left max-sm:text-4xl md:pb-4 max-lg:max-w-[80%]">
          IN THE PHILIPPINES TODAY...
        </h1>
        <p className="mx-auto dongle-regular text-left max-sm:mx-14 max-lg:max-w-md">
          Lambanog is the most popular locally produced distilled spirit, often associated with folk celebrations and festivities. Without it, many feel that events would lack the same level of enjoyment and memorability for both guests and hosts. Aside from Quezon, the Lambanog industry is also thriving in neighboring provinces such as Batangas, Laguna, and Camarines Sur.
          <br />
          <br />
          In 2024, Quezon Lambanog earned the 2nd spot in the best spirit in the world category according to a popular world food atlas website, TasteAtlas.com. This recognition in our very own Lambanog has brought pride and honor to our country.
        </p>
      </div>
    </div>
  );
};

export default PhilippinesToday;
