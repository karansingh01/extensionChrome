import React, { useEffect, useState } from 'react';
import './showTxt.css';
import quotesFilePath from './quotesFile.txt';

const SendTxt: React.FC = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const response = await fetch(quotesFilePath);
        const quotesData = await response.text();
        const quotes = quotesData.split('\n\n');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
      } catch (err) {
        console.error('Error loading quotes:', err);
      }
    };

    loadQuotes();
  }, []);

  return (
    <>
      <div className="quote-container">
        <p className="quote-text">{quote}</p>
      </div>
      <div className="allTimeQuotes-container">
      <div id='allTimeQuotes'>
        <p>Dont think about the grade/reward you will get later. Tell yourself, that this hurts and because it hurts, it means my baseline dopamine will be higher in the future. In that moment you are doing what you do because you love it. The journey should be fun. </p>
        <p>I am a lucky person and today is going to be another lucky day. I deserve good luck and will receive good fortune today.</p>
        <p>Dont layer different dopamine</p>
      </div>
      </div>
    </>
  );
};

export default SendTxt;
