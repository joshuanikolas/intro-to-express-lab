const express = require('express')
const app = express();

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


// 1. Be Polite, Greet the User

app.get('/greetings/:name', (req, res) => {
        const name = req.params.name;
        res.send(`Hello there, ${name}!`);
});


//2. Rolling the Dice


app.get('/roll/:number', (req, res) => {
        const number = req.params.number
        if (isNaN(number)) {
            res.send('You must specify a number.')
        } else {
            const randomNumber = Math.floor(Math.random() * (number + 1))
            res.send(`You rolled a ${randomNumber}.`)
        }
        });


//3. I Want THAT One!


        app.get('/collectibles/:index', (req, res) => {
            const index = req.params.index;
        
            if (isNaN(index)) {
                res.send('This item is not yet in stock. Check back soon!')
            } else {
                const collectible = collectibles[index];
                res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
            }
        });


//4. Filter Shoes by Query Parameters


        app.get('/shoes', (req, res) => {
            const minPrice = (req.query.min_price)
            const maxPrice = (req.query.max_price)
            const type = (req.query.type)
        
            const filteredShoes = shoes.filter(shoe => {
                let keep = true
                if(minPrice && shoe.price < minPrice) {
                    keep = false
                }
                if(maxPrice && shoe.price > maxPrice) {
                    keep = false
                }
                if(type && shoe.type !== type) {
                    keep = false
                }
                return keep
            })
        
            res.json(filteredShoes)
        });





        app.listen(3000, () => {
            console.log('Listening on port 3000')
    });