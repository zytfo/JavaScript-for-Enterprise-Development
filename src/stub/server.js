const fs = require('fs');
const path = require('path');

console.log('port', process.env.PORT);
const port = process.env.PORT;

module.exports = (app) => {
    app.get('/profiles/76561198205886600/inventory/json/440/2', (request, response) => {
        if (port === '9001') {
            fs.readFile(
                path.resolve(__dirname, '76561198205886600.json'),
                {encoding: 'utf8'},
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        }
    });
    app.get('/profiles/76561198205886600/inventory/json/730/2', (request, response) => {
        if (port === '9001') {
            fs.readFile(
                path.resolve(__dirname, 'csgo.json'),
                {encoding: 'utf8'},
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        }
    });
    app.get('/price', (request, response) => {
        if (port === '9001') {
            fs.readFile(
                path.resolve(__dirname, 'price.json'),
                {encoding: 'utf8'},
                (err, data) => {
                    response.type('application/json').send(data)
                }
            )
        }
    })
};
