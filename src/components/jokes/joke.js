import React from 'react';
import JokesList from './jokes-list/jokes-list';
import jokes from './jokes.json';

const Joke = ({ joker, comedian, country }) => {
  return (
    <>
      {jokes.map((joke, i) => {
        const { joker, comedian, country } = joke;
        return (
          <div key={i}>
            <JokesList joker={joker} comedian={comedian} country={country} />
          </div>
        );
      })}
    </>
  );
};
export default Joke;
