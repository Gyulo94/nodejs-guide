const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8090;

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('views'))
app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => {
    console.log(`서버 가동 중...${PORT}`);
})