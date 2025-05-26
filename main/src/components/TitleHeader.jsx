import React from 'react';

const TitleHeader = ({ title }) => {
  // Split around the word 'Prestige'
  const [before, after] = title.split('Prestige');

  return (
    <h2 className="text-4xl font-light text-center">
      {before}
      <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Prestige
      </span>
      {after}
    </h2>
  );
};

export default TitleHeader;
