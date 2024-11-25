import React from 'react';

const BestSpiritBanner = () => {
  return (
    <div className='bg-[#BBC191]'>
    <div
      className="flex justify-center items-center bg-[#6A7339] border-green border-[#BBC191]"
      style={{ fontFamily: 'Gabarito, sans-serif' }}
    >
      <p className="lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-xl leading-normal font-bold text-[#FAF5F0] text-center gabarito-header">
        VOTED THE 2ND BEST <br />  SPIRIT IN THE WORLD
        <br />
        <span className="text-white gabarito-header lg:text-3xl md:text-2xl sm:text-xl w-full flex justify-end mt-2 pr-4 lg:translate-x-32 md:translate-x-26 sm:translate-x-28 max-sm:translate-x-12 max-sm:text-base">
          <a
            href="https://www.spot.ph/eatdrink/the-latest-eat-drink/108440/lambanog-2nd-best-tastaatlas-a382-20240323?s=231l7h3cgfkj6oc33l6o489bu4"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            -- TasteAtlas
          </a>
        </span>
      </p>
    </div>
    </div>
  );
};

export default BestSpiritBanner;
