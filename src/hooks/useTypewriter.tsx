import { useState, useEffect } from 'react';

export const useTypewriter = (
  text: string,
  speed: number = 100,
  startDelay: number = 0
) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const startTimer = setTimeout(() => {
      let index = 0;
      
      timer = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(timer);
    };
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
};