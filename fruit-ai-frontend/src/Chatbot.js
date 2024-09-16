import React, { useState } from 'react';
import './Chatbot.css';  // Import the CSS file

const fruits = [
  { id: 1, name: 'Apple', description: 'Apples are sweet and crunchy.', details: 'Apples are rich in antioxidants and fiber. They can help with weight loss and reduce the risk of chronic diseases.' },
  { id: 2, name: 'Banana', description: 'Bananas are soft and sweet.', details: 'Bananas are a good source of potassium and vitamins. They are great for energy and digestive health.' },
  { id: 3, name: 'Orange', description: 'Oranges are juicy and tangy.', details: 'Oranges are high in vitamin C and antioxidants. They can boost your immune system and improve skin health.' },
];

const Chatbot = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">Fruit Chatbot</h1>

      <div className="fruit-list">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className="fruit-card"
            onClick={() => setSelectedFruit(fruit)}
          >
            <h2 className="fruit-name">{fruit.name}</h2>
            <p className="fruit-description">{fruit.description}</p>
          </div>
        ))}
      </div>

      {selectedFruit && (
        <div className="fruit-details">
          <h2 className="details-name">{selectedFruit.name}</h2>
          <p className="details-description">{selectedFruit.details}</p>
          <button onClick={() => setSelectedFruit(null)} className="details-close">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
