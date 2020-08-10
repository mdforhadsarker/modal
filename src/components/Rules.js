import React from 'react';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const styles = {
  container: {
    // backgroundColor: 'red',
    display: 'flex',
    justtifyContent: 'row',
    margin: '8px',
    
  }
};

const removeItem = e => {
  console.log('clciked');
};

const addItem = e => {
  console.log('clciked');
};

const Rules = () => {
  return (
    <div className='rules'>
      <select className='select' name='affsub' id='affsub'>
        <option value='All'>aff_sub</option>
        <option value='notall'>aff_sub1</option>
      </select>
      <select className='select' name='conditions' id='condition'>
        <option value='All'>is</option>
        <option value='notall'>is not</option>
      </select>

      <div className='insertparameter'>
        <input
          type='text'
          id='isertparameter'
          name='isertparameter'
          placeholder='insert parameter'
        />
      </div>
      <div style={styles.container}>
        <RemoveCircleOutlineIcon onClick={removeItem} />
        <AddCircleOutlineIcon onClick={addItem} />
      </div>
    </div>
  );
};

export default Rules;
