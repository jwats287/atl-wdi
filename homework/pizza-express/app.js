const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send(`Welcome to Pizza Express!`);
    res.render('index', {

    })
})

app.get('/topping/:topping', (req, res) => {
    var topping = req.params.topping;
    // res.send(`${topping} pizza! Good choice!`);
    res.render('toppings', {
        data: topping
    })
})

app.get('/order/:number/:size', (req, res, next) => {
    var number = req.params.number;
    var size = req.params.size;
    // res.send(`Your order for ${number} ${size} pizzas will be ready in 1 minute!`);
    res.render('order', {
        number: number,
        size: size
    })
})

app.get('/*', (req, res) => {
    res.status(404);
    // res.send(`404`);
    res.render('404');
})


// Handlebars.registerPartial("header", '{{ header }}')

app.listen(port, () => {
    console.log("=================================")
    console.log(`LISTENING ON PORT ${port}`);
    console.log("=================================")
});