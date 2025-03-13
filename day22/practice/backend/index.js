const express = require('express');
const os = require('os');
const crypto = require('crypto');

const app = express();
const PORT = 3000;

app.use(express.json());

console.log(`Hostname: ${os.hostname()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Total Memory: ${os.totalmem()}`);

app.get('/', (req, res) => {
    res.send('Welcome to the basic practice Node.js Express API!');
});

app.get('/generate-id', (req, res) => {
    const uniqueId = crypto.randomUUID();
    res.json({ uniqueId });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Server is running on http://localhost:${PORT}/generate-id/`);
});
