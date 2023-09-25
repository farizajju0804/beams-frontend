// Overlay.js

import React, { useState } from 'react';
import './Overlay.css';
import { CloseCircle } from 'iconsax-react';
function Overlay({ question, options, correctAnswer, onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
    }
  };

  const isCorrect = selectedOption === correctAnswer;

  return (
    <div className="overlay-wrapper" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <CloseCircle className="close-button" variant='bold' color='#161616' onClick={onClose}/>
        <div className="question">{question}</div>
        <div className="options">
          {options.map((option, index) => (
            <div
              key={index}
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
        {selectedOption !== null && (
  <div className={`feedback ${isCorrect ? 'correct' : 'wrong'}`}>
    {isCorrect ? 'Correct!' : `Wrong! The correct answer is: ${correctAnswer}`}
  </div>
)}
      </div>
    </div>
  );
}

export default Overlay;
