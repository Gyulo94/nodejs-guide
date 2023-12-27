const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;
app.use(bodyParser.urlencoded({extended: false}));

app.get('/add-product',(req, res) => {
    console.log('in another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

app.get('/',(req, res) => {
    console.log('in another middleware!');
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(PORT, () => {
    console.log(`서버 가동 중...${PORT}`);
})