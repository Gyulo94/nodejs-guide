const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(shopRoutes);
app.use('/admin', adminData.routes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(8090, () => {
    console.log(`서버 가동 중...8090`);
})