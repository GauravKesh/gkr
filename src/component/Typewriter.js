import React, { useState, useEffect } from 'react';
import "../style/Typewriter.css";
const Typewriter = ({ texts, delay = 100, onTypingComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < texts.length) {
        const currentText = texts[textIndex];
  
        if (isErasing) {
          // Erasing
          if (charIndex >= 0) {
            setDisplayedText((prevText) => prevText.slice(0, -1));
            setCharIndex(charIndex - 1);
          } else {
            // Finished erasing, move to the next text
            setTextIndex((textIndex + 1) % texts.length); // Loop back to the start of the texts array
            setIsErasing(false);
            setCharIndex(0); // Reset charIndex to the start of the new text
          }
        } else {
          // Typing
          if (charIndex < currentText.length) {
            setDisplayedText((prevText) => prevText + currentText[charIndex]);
            setCharIndex(charIndex + 1);
          } else {
            // Finished typing, start erasing
            setIsErasing(true);
          }
        }
      }
    }, delay);
  
    return () => {
      clearInterval(interval);
    };
  }, [texts, textIndex, charIndex, delay, isErasing]);
  return <span className='typing'>{displayedText}</span>;
};

export default Typewriter;