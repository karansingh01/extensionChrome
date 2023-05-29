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

      <div id='allTimeQuotes'>
        <p>I am a lucky person and today is going to be another lucky day.</p>
        <p>I know that I can be even luckier in the future.</p>
        <p>I deserve good luck and will receive good fortune today.</p>
      </div>
    </>
  );
};

export default SendTxt;
