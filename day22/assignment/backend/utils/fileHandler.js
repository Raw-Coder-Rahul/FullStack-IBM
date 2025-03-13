const fs = require('fs');
const path = require('path');

const readProducts = () => {
    const data = fs.readFileSync(path.join(__dirname, '../products.json'), 'utf-8');
    return JSON.parse(data);
};

const writeProducts = (data) => {
    fs.writeFileSync(path.join(__dirname, '../products.json'), JSON.stringify(data, null, 2));
};

module.exports = { readProducts, writeProducts };