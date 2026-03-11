import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed = 150, delay = 2000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = texts[loopIndex % texts.length];
      
      if (isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(speed / 2);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(speed);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } 
      else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex, texts, speed, delay, typingSpeed]);

  return (
    <span className="typewriter-text">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;