require('dotenv').config();
const path = require('path');
const express = require('express');


const app = express();

// Express configuration
app.set ('views' , path.join(__dirname, './views')); //no se si va o no va
app.set('view engine', 'ejs');

// Routes
const homeRoutes = require('./routes/home.route');
const productDetailRoutes = require('./routes/productDetail.route');
const cartRoutes = require('./routes/cart.route');
const authRoutes = require('./routes/auth.route');

app.use ('/' , homeRoutes);
app.use ('/product' , productDetailRoutes);
app.use ('/cart' , cartRoutes);
app.use ('/auth' , authRoutes);


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Listening on port ' + process.env.PORT);
});