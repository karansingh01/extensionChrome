import React, { useEffect, useState } from 'react';
import './showTxt.css';
import quotesFile from './quotesFile.txt';

const SendTxt: React.FC = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const quotes = (await import(`../${quotesFile}`)).default.split('\n\n');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
      } catch (err) {
        console.error('Error loading quotes:', err);
      }
    };

    loadQuotes();
  }, []);

  return (
    <div className="quote-container">
      <h1>Random Quote</h1>
      <p className="quote-text">{quote}</p>
    </div>
  );
};

export default SendTxt;
