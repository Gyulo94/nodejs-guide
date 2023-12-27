const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8080;

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Page not found</h1>')
})

app.listen(PORT, () => {
    console.log(`서버 가동 중...${PORT}`);
})