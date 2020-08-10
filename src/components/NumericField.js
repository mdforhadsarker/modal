import React from 'react';

const NumericField = () => {
  return (
    <div className='numeric'>
      <p>then revenue is</p>
      <input
        className='numericfield'
        type='number'
        id='quantity'
        name='quantity'
      />
      <input type='submit' className='percentage' value='%' />
    </div>
  );
};

export default NumericField;
