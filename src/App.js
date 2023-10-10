import React, { useState } from 'react';
import './App.css';

function App() {
  const [groceries, setGroceries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newGrocery, setNewGrocery] = useState({ name: '', price: '', expiration: '', location: '' });

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const addGrocery = () => {
    if (newGrocery.name && newGrocery.price && newGrocery.expiration && newGrocery.location) {
      setGroceries([...groceries, newGrocery]);
      setNewGrocery({ name: '', price: '', expiration: '', location: '' });
      toggleModal();
    }
  };

  return (
    <div className="App">
      <h1>ECOEATS</h1>
      <button onClick={toggleModal} className="add-button">
        Add Grocery
      </button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Grocery</h2>
            <input
              type="text"
              placeholder="Name"
              value={newGrocery.name}
              onChange={(e) => setNewGrocery({ ...newGrocery, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              value={newGrocery.price}
              onChange={(e) => setNewGrocery({ ...newGrocery, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Expiration Date"
              value={newGrocery.expiration}
              onChange={(e) => setNewGrocery({ ...newGrocery, expiration: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              value={newGrocery.location}
              onChange={(e) => setNewGrocery({ ...newGrocery, location: e.target.value })}
            />
            <button onClick={addGrocery}>Add</button>
          </div>
        </div>
      )}
      <ul className="grocery-list">
        {groceries.map((grocery, index) => (
          <li key={index}>
            <div className="grocery-item">
              <h3>{grocery.name}</h3>
              <p>Price: ${grocery.price}</p>
              <p>Expiration Date: {grocery.expiration}</p>
              <p>Location: {grocery.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
