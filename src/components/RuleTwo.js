import React from 'react';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const RuleTwo = ({ remove }) => {
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

        <input type='submit' className='addrule' value='add rule' />
      </div>

      
      <div className='icons'>
        <RemoveCircleOutlineIcon onClick={remove} className='removeicon'/>
        <AddCircleOutlineIcon />
      </div>
    </div>
  );
};

export default RuleTwo;
