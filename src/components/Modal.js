/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Modal from 'react-modal';
import './Modal.css';
import Rules from '../components/Rules';
import NumericField from '../components/NumericField';
import RemoveRule from './RemoveRule';
import RuleTwo from './RuleTwo';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // backgroundColor: 'red',
    width: '70%',
    borderRadius: '0px',
    padding: '-20px'
  }
};

Modal.setAppElement('#root');

function modalApp() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  // remove/add rule state
  const [isOpenRule, setIsOpenRule] = React.useState(false);

  // add rule handler
  const addRule = () => {
    setIsOpenRule(true);
  };
  // remove rule handler
  const removeRule = () => {
    setIsOpenRule(false);
  };

  // remove/add rule two state
  const [isOpenRuleTwo, setIsOpenRuleTwo] = React.useState(false);

  // add rule two handler
  const addRuleTwo = () => {
    setIsOpenRuleTwo(true);
  };
  // remove rule two handler
  const removeRuleTwo = () => {
    setIsOpenRuleTwo(false);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='Container'>
      <button onClick={openModal}>Add Revenue Group</button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName='myoverlay'
      >
        <h3 ref={_subtitle => (subtitle = _subtitle)}>Add Revenue Group</h3>

        <div className='inputField'>
          <label for='revenuegrouptitle'>Revenue Group Title</label>
          <input type='text' id='revenuegrouptitle' name='revenuegrouptitle' />
        </div>
        <div className='all'>
          <p>If</p>
          <select className='select' name='conditions' id='condition'>
            <option value='All'>ALL</option>
            <option value='notall'>Not All</option>
          </select>
          <p>of the below conditions are met</p>
        </div>
        <Rules add={addRule} addTwo={addRuleTwo} removeTwo={removeRuleTwo} />
        {isOpenRule && <RemoveRule remove={removeRule} />}
        {isOpenRuleTwo && <RuleTwo remove={removeRuleTwo} />}
        <NumericField />

        <div className='buttonContainer'>
          <button onClick={closeModal} type='button' className='button'>
            Confirm
          </button>

          <button
            onClick={closeModal}
            type='button'
            className='button button-cancel'
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default modalApp;

Modal.setAppElement(document.getElementById('root'));
