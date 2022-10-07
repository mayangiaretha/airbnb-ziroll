import React from 'react';
import colors from './challenge.json';
import ChallengeList from './challenge-list/challenge-list';

const Challenge = () => (
  <>
    {colors.map(({ red, blue, violet }, i) => (
      <div key={i}>
        <ChallengeList red={red} blue={blue} violet={violet} />
      </div>
    ))}
  </>
);

export default Challenge;
