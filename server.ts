import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.get('/random-quote', async (req, res) => {
  try {
    const data = await fs.readFile('QuotesFile.txt', 'utf-8');
    const quotes = data.split('\n\n');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.send(quotes[randomIndex]);
  } catch (err) {
    console.error('Error loading quotes:', err);
    res.status(500).send('Error loading quotes');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
