const fs = require('fs');
const path = require('path');

const getProductsData = () => {
    const data = fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8');
    return JSON.parse(data);
};

module.exports = getProductsData;
