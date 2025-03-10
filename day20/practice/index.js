// Generating a Random Key
const crypto = require('crypto');
const { text } = require('stream/consumers');
// console.log(crypto);
const key = crypto.randomBytes(32).toString('hex');
console.log('Random Key : ',key);

// Hashing Data
const data = 'Hello, world!';
const hash = crypto.createHash('sha256').update(data).digest('hex');
console.log('SHA-256 Hash : ', hash);


/*
// Encrypting and Decrypting Data
// Encryption
const algorithm = 'aes-256-cbc';
const key2 = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

// Decryption
const decrypt = (encrypted) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypt += decipher.final('utf8');
    return decrypted;
};

const message = 'This is a secret message';
const encryptedMessage = encrypt(message);
const decryptedMessage = decrypt(message);
console.log('Encrpted Message: ', encryptedMessage);
console.log('Decrypted Message: ',decryptedMessage);

*/

// Generating an HMAC
const secret = 'mysecretkey';
const data2 = 'Hello, world!';
const hmac = crypto.createHmac('sha256', secret).update(data2).digest('hex');
console.log('HMAC:', hmac);