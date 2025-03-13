const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();

app.use(express.json());

app.get("/",(req, res) => {
    res.status(200).send(`<h1 style="color:red;">Welcome to Our Backend..!</h1>`)
});


app.use(userRouter)

const PORT = 808;

app.listen(PORT, () => {
    console.log(`Serever is running at http://localhost:${PORT}/`);
})