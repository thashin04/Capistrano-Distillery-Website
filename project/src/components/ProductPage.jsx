import React, { useState, useEffect } from 'react';
import './index.css';
import "animate.css/animate.compat.css";
import FlipCard from './FlipCard';

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

  const section1Cards = Array.from({ length: 6 }).map((_, index) => (
    <div key={`section1-${index}`} className="card-hover text-center">
      <div className="flex flex-col items-center">
        <FlipCard />
        <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
      </div>
    </div>
  ));

  const section2Cards = Array.from({ length: 2 }).map((_, index) => (
    <div key={`section2-${index}`} className="card-hover text-center">
      <div className="flex flex-col items-center">
        <FlipCard />
        <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
      </div>
    </div>
  ));

  const section3Cards = Array.from({ length: 6 }).map((_, index) => (
    <div key={`section3-${index}`} className="card-hover text-center">
      <div className="flex flex-col items-center">
        <FlipCard />
        <p className="text-[#FAF5F0] text-lg mt-4 gabarito-regular">NAME</p>
      </div>
    </div>
  ));

  const splitIntoRows = (cards) => {
    const rows = [];
    for (let i = 0; i < cards.length; i += columns) {
      rows.push(cards.slice(i, i + columns));
    }
    return rows;
  };

  return (
    <div className="bg-[#6A7339] w-screen">
      <div className="flex flex-col pt-12 pb-12 items-center lg:w-full mx-auto gap-8">
        <div className="text-[#E0C9AC] lg:px-12 sm:px-8 space-y-8 flex flex-col items-center lg:items-start pt-0">

          {/* Section 1 */}
          <div className="flex flex-col gap-8">
            {splitIntoRows(section1Cards).map((row, rowIndex) => (
              <div
                key={`section1-row-${rowIndex}`}
                className="flex justify-center gap-8"
                style={{ flexWrap: 'wrap' }}
              >
                {row}
              </div>
            ))}
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-8 items-center mx-auto">
            {splitIntoRows(section2Cards).map((row, rowIndex) => (
              <div
                key={`section2-row-${rowIndex}`}
                className="flex justify-center gap-8"
                style={{ flexWrap: 'wrap' }}
              >
                {row}
              </div>
            ))}
          </div>


          {/* Section 3 */}
          <div className="flex flex-col gap-8">
            {splitIntoRows(section3Cards).map((row, rowIndex) => (
              <div
                key={`section3-row-${rowIndex}`}
                className="flex justify-center gap-8"
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
