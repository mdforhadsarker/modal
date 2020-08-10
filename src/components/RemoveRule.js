import React from 'react';

const styles = {
  color: {
    color: 'red'
  }
};

const RemoveRule = ({ remove }) => {
  return (
    <div>
      <div className='insertparameter'>
        <div className='addrule1'>
          <input
            type='text'
            id='isertparameter'
            name='isertparameter'
            placeholder='insert parameter'
          />

          <input
            type='submit'
            style={styles.color}
            value='remove rule'
            onClick={() => remove()}
          />
        </div>
      </div>
    </div>
  );
};

export default RemoveRule;
