import React from 'react';

 const ChallengeList = ({ red, blue, violet }) => {
  return (
    <div>
      <h1>colors</h1>
      <p>red:{red}</p>
      <p>blue:{blue}</p>
      <p>violet:{violet}</p>
    </div>
  );
};

export default ChallengeList;
