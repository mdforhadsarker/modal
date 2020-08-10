import React from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  // test array
  const [data, setData] = React.useState([]);

  // add array item
  const add = () => {
    let item = 'something';
    let oldItem = data;
    let newItem = [...oldItem, item];
    setData(newItem);
  };

  const removeItem = index => {
    let oldArray = data;
  let newArray = oldArray.filter((data, ind) => ind !== index)
  setData(newArray)
  };

  return (
    <div className='App'>
      <Modal />
      <button onClick={() => add()}>Add item</button>
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <div>
              <h2> {item} </h2>
              <button onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
