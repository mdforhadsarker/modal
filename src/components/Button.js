import React from 'react';

const Button = ({ closeModal }) => {
  return (
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
  );
};

export default Button;
