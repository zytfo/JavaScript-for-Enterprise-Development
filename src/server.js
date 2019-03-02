const express = require('express');

const app = express();
app.use('/api/character/', (request, response) => {
    response.send('Hello from NodeJS')
});
app.listen(5000);