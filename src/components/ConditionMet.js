import React from 'react';

const ConditionMet = () => {
  return (
    <div className='all'>
      <p>If</p>
      <select className='select' name='conditions' id='condition'>
        <option value='All'>ALL</option>
        <option value='notall'>Not All</option>
      </select>
      <p>of the below conditions are met</p>
    </div>
  );
};

export default ConditionMet;
