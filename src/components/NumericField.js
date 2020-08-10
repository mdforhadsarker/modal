import React from 'react';

const styles = {
  container: {
    color: 'gray',
    // backgroundColor: 'red',
    width: '20px',
    marginLeft: '-25px',
    marginBottom: '5px',
    cursor: 'none'
  }
};
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
      <input
        type='submit'
        style={styles.container}
        className='percentage'
        value='%'
      />
    </div>
  );
};

export default NumericField;
