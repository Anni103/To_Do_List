import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (inputList.trim() !== "") {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      // Clear input field after adding the item
      setInputList("");
    } else {
      alert("Please enter an item!");
    }
  };

  const deleteItem = (index) => {
    setItems((oldItems) => {
      return oldItems.filter((_, i) => i !== index);
    });
  };

  return (
    <div className='main_div'>
      <div className='center_div'>
        <h1>TODO List</h1>
        <input 
          type='text' 
          placeholder='Add an Item' 
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}>+</button>

        <ol>
          {items.map((itemVal, index) => {
            return (
              <div className='todo_style' key={index}>
                <li>
                  <button 
                    className='fa-times' 
                    onClick={() => deleteItem(index)}
                  >
                    &#10006; {/* Cross icon */}
                  </button>
                  {itemVal}
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
