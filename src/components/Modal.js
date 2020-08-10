/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Modal from 'react-modal';
import './Modal.css';

//Components

import Rules from './Rules';
import NumericField from './NumericField';
import RuleTwo from './RuleTwo';
import Button from './Button';
import ConditionMet from './ConditionMet';
import InputField from './InputField';

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
        <InputField />
        <ConditionMet />
        <Rules addTwo={addRuleTwo} removeTwo={removeRuleTwo} />
        {isOpenRuleTwo && <RuleTwo remove={removeRuleTwo} />}
        <NumericField />
        <Button closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default modalApp;

Modal.setAppElement(document.getElementById('root'));
