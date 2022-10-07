import React from 'react';

const JokesList = ({ joker, comedian, country }) => {
  return (
    <>
      <h1>Jokes</h1>
      <p>joker:{joker}</p>
      <p>comedian:{comedian}</p>
      <p>country:{country}</p>
    </>
  );
};

export default JokesList;
