import React, { useState, useEffect } from 'react';
import './index.css';
import "animate.css/animate.compat.css";
import FlipCard from './FlipCard';
import prod1 from "../images/prod1.png";
import prodback1 from "../images/prodback1.png";
import prod2 from "../images/prod2.png";
import prodback2 from "../images/prodback2.png";
import prod3 from "../images/prod3.png";
import prod4 from "../images/prod4.png";
import prod5 from "../images/prod5.png";
import prod6 from "../images/prod6.png";
import prod7 from "../images/prod7.png";
import prod8 from "../images/prod8.png";
import prodback3 from "../images/prodback3.png";
import prodback4 from "../images/prodback4.png";
import prod9 from "../images/prod9.png";
import prod10 from "../images/prod10.png";
import prod11 from "../images/prod11.png";
import prod12 from "../images/prod12.png";
import prod13 from "../images/prod13.png";
import prod14 from "../images/prod14.png";

const ProductPage = () => {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3); // 3 cards per row for large screens
      } else if (window.innerWidth >= 768) {
        setColumns(2); // 2 cards per row for tablet screens
      } else {
        setColumns(1); // 1 card per row for mobile screens
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns); // Update on window resize

    return () => window.removeEventListener('resize', updateColumns); // Cleanup
  }, []);

  const cardData = [
    // Section 1: 6 cards
    { frontImage: prod1, backImage: prodback1, name: 'PLAIN LAMBANOG' },
    { frontImage: prod2, backImage: prodback2, name: 'PINEAPPLE LAMBANOG' },
    { frontImage: prod3, backImage: prodback2, name: 'BUBBLEGUM LAMBANOG' },
    { frontImage: prod4, backImage: prodback2, name: 'LIPUTI LAMBANOG' },
    { frontImage: prod5, backImage: prodback2, name: 'GRAPE LAMBANOG' },
    { frontImage: prod6, backImage: prodback2, name: 'PRUNE LAMBANOG' },

    // Section 2: 2 cards
    { frontImage: prod7, backImage: prodback3, name: ' PHILIPPINE LAMBANOG BOX' },
    { frontImage: prod8, backImage: prodback4, name: 'DON ARISTON BOX' },

    // Section 3: 6 cards
    { frontImage: prod9, backImage: prodback1, name: 'PLAIN LAMBANOG' },
    { frontImage: prod10, backImage: prodback2, name: 'PINEAPPLE LAMBANOG' },
    { frontImage: prod11, backImage: prodback2, name: 'BUBBLEGUM LAMBANOG' },
    { frontImage: prod12, backImage: prodback2, name: 'LIPUTI LAMBANOG' },
    { frontImage: prod13, backImage: prodback2, name: 'GRAPE LAMBANOG' },
    { frontImage: prod14, backImage: prodback2, name: 'PRUNE LAMBANOG' },
  ];

  const section1Data = cardData.slice(0, 6);
  const section2Data = cardData.slice(6, 8);
  const section3Data = cardData.slice(8, 14);

  const generateCards = (data, sectionKey) => {
    return data.map((card, index) => (
      <div key={`${sectionKey}-${index}`} className="card-hover text-center">
        <div className="flex flex-col items-center">
          <FlipCard frontImage={card.frontImage} backImage={card.backImage} />
          <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">{card.name}</p>
        </div>
      </div>
    ));
  };

  const splitIntoRows = (cards) => {
    const rows = [];
    for (let i = 0; i < cards.length; i += columns) {
      rows.push(cards.slice(i, i + columns));
    }
    return rows;
  };

  return (
    <div className="bg-[#6A7339] w-screen">
      <div className="flex flex-col pt-12 pb-12 items-center lg:w-full mx-auto gap-10">
        <div className="text-[#E0C9AC] lg:px-12 sm:px-4 space-y-8 flex flex-col items-center lg:items-start pt-0">

          {/* Section 1 */}
          <div className="w-full flex py-9 justify-center">
            <div className="border-2 border-[#FAF5F0] rounded-full px-6 py-3">
              <h1 className="gabarito-bigger text-center text-[#FAF5F0]">RATTAN SETS</h1>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {splitIntoRows(generateCards(section1Data, 'section1')).map((row, rowIndex) => (
              <div
                key={`section1-row-${rowIndex}`}
                className="flex justify-center gap-10"
                style={{ flexWrap: 'wrap' }}
              >
                {row}
              </div>
            ))}
          </div>

          {/* Section 2 */}
          <div className="w-full flex py-9 justify-center">
            <div className="border-2 border-[#FAF5F0] rounded-full px-6 py-3">
              <h1 className="gabarito-bigger text-center text-[#FAF5F0]">BOXED SETS</h1>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center mx-auto">
            {splitIntoRows(generateCards(section2Data, 'section2')).map((row, rowIndex) => (
              <div
                key={`section2-row-${rowIndex}`}
                className="flex justify-center gap-10"
                style={{ flexWrap: 'wrap' }}
              >
                {row}
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <div className="w-full flex justify-center">
            <div className=" border-2 border-[#FAF5F0] rounded-full px-6 py-3">
              <h1 className="gabarito-bigger text-center  text-[#FAF5F0]">BOTTLED LAMBANOG</h1>
            </div>
          </div>
          <div className="flex pb-8 flex-col gap-10">
            {splitIntoRows(generateCards(section3Data, 'section3')).map((row, rowIndex) => (
              <div
                key={`section3-row-${rowIndex}`}
                className="flex justify-center gap-10"
                style={{ flexWrap: 'wrap' }}
              >
                {row}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
