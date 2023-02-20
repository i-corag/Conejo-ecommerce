const path = require('path');
const fs = require('fs');

const getHome = (req, res) => {
    const products = JSON.parse (fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8'));
    return res.render ('pages/home.ejs' , {products});
};

module.exports = {getHome};