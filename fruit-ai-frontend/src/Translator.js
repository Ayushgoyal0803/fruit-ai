import React, { useState } from 'react';
import './Translator.css';  // Import the CSS file
import langs from './langs.js';  // Import the language list

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLang, setSelectedLang] = useState('ma'); 

  // Mock translation function (replace with actual API call)
  const translateText = async (text, targetLang) => {
    // Simulating a translation API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(text.split('').reverse().join(''));  // Example: reversing the input text
      }, 1000);
    });
  };

  const handleTranslate = async () => {
    const result = await translateText(inputText, selectedLang);
    setTranslatedText(result);
  };

  const handleLangChange = (event) => {
    setSelectedLang(event.target.value);
  };

  return (
    <div className="translator-container">
      <h1 className="translator-title">Text Translator</h1>
      
      <textarea
        className="translator-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here..."
      />
      
      <select className="translator-select" value={selectedLang} onChange={handleLangChange}>
        {Object.entries(langs).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      
      <button className="translator-button" onClick={handleTranslate}>
        Translate
      </button>
      
      {translatedText && (
        <div className="translator-result">
          <h2 className="result-title">Translated Text</h2>
          <p className="result-text">{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
