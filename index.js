const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));

app.get('/rates', async(request, response) => {

    const rate_url = 'https://api.ratesapi.io/api/latest';
    const rate_response = await fetch(rate_url);
    const rate_data = await rate_response.json();
  
    const data = {
      rate_data
    };
    response.json(data);
  });

app.get('/', (request, response) => {
    response.send('Hello World!');
});