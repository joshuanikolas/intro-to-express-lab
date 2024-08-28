const express = require('express')
const app = express();

app.get('/greetings/:name', (req, res) => {
        const name = req.params.name;
        res.send(`Hello there, ${name}!`);
});




app.get('/roll/:number', (req, res) => {
        const number = req.params.number
        if (isNaN(number)) {
            res.send('You must specify a number.')
        } else {
            const randomNumber = Math.floor(Math.random() * (number + 1))
            res.send(`You rolled a ${randomNumber}.`)
        }
        });









        app.listen(3000, () => {
            console.log('Listening on port 3000')
    });