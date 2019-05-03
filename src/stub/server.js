const fs = require('fs');
const path = require('path');

console.log('port', process.env.PORT);
const port = process.env.PORT;

module.exports = (app) => {
    app.get('/api/items/', (request, response) => {
        if (port === '9001') {
            fs.readFile(
                path.resolve(__dirname, '76561198205886600.json'),
                { encoding: 'utf8' },
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        } else{
            fs.readFile(
                path.resolve(__dirname, '76561198167602704.json'),
                { encoding: 'utf8' },
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        }
    })
}
