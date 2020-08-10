import React from 'react';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveRule from '../components/RemoveRule';

const RuleTwo = ({addTwo, remove }) => {
  const [isOpenRule, setIsOpenRule] = React.useState(false);
  const addRule = () => {
    setIsOpenRule(true);
  };
  // remove rule handler
  const removeRule = () => {
    setIsOpenRule(false);
  };
  return (
    <div className='rules'>
      <div className='selectRules'>
        <select className='select' name='affsub' id='affsub'>
          <option value='All'>aff_sub</option>
          <option value='notall'>aff_sub1</option>
        </select>
        <select className='select' name='conditions' id='condition'>
          <option value='All'>is</option>
          <option value='notall'>is not</option>
        </select>
      </div>

      <div className='insertparameter'>
        {isOpenRule && <RemoveRule remove={removeRule} />}
        <div className='addrule1'>
          <input
            type='text'
            id='isertparameter'
            name='isertparameter'
            placeholder='insert parameter'
          />

          <input
            type='submit'
            className='addrule'
            value='add rule'
            onClick={() => addRule()}
          />
        </div>
      </div>

      <div className='icons'>
        <RemoveCircleOutlineIcon onClick={remove} className='removeicon' />
        <AddCircleOutlineIcon onClick={addTwo}/>
      </div>
    </div>
  );
};

export default RuleTwo;
