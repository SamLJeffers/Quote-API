const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.listen(PORT,() => {
    console.log(`Server listeneing on ${PORT}`);
});

//GET random quote
app.get('/api/quotes/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.send({ quote: randomQuote });
  });