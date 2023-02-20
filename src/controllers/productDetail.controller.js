const path = require('path');
const fs = require('fs');

const getProductDetail = (req , res) => {
    const {id} = req.params;
    const products = JSON.parse(fs.readFileSync(path.join(__dirname , "../database/products.json"), "utf8"));
    const product = products.find(product => product.id == id);
    if(!product) return res.status(404).send ('Product not found');

    return res.render ('pages/productDetail.ejs' , { product });
};

module.exports = {getProductDetail};