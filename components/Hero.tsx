import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-4">
      {/* 
        Using a text representation styled to look somewhat like the logo 
        since we don't have the asset file.
      */}
      <div className="text-center relative">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-yellow-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-wide transform -rotate-2" 
            style={{ 
              textShadow: '4px 4px 0 #cf152d, -1px -1px 0 #cf152d, 1px -1px 0 #cf152d, -1px 1px 0 #cf152d, 1px 1px 0 #cf152d' 
            }}>
          Adventureland
        </h1>
        <div className="mt-2 bg-[#f4eeb1] border-2 border-[#b91c53] text-[#b91c53] px-6 py-1 rounded-full inline-block shadow-lg transform rotate-1">
          <p className="font-bold text-xs md:text-sm tracking-widest uppercase">Long Island's Amusement Park</p>
          <p className="font-bold text-xs md:text-xs">SINCE 1962</p>
        </div>
        <p className="text-white mt-4 font-semibold text-sm md:text-base tracking-wide drop-shadow-md">
          A Tradition of Creating Family Memories
        </p>
      </div>
    </div>
  );
};

export default Hero;