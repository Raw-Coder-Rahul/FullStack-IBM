const express = require('express');
const { connectDB } = require('./configs/db');
const { userRouter } = require('./routes/user.route');

const app = express();

app.use(express.json());

app.get("/",(req, res) => {
    res.status(200).send(`<h1 style="color:red;">Welcome to Our Backend..!</h1>`)
});

app.use(userRouter);

const PORT = 808;

app.listen(PORT, async() => {
    try {
        await connectDB
        console.log("MongoDB is Connected.");
        console.log(`Serever is running at http://localhost:${PORT}/`);
    } catch(err) {
        console.log(err.message);
    }
});