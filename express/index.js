const express = require('express');
const app = express();
const user = require('./router/user.router');
const port = 3000;

app.use(express.json());

app.use('/user', user);

app.get("/", (req,res) => {
    res.send('Hello');
})
app.listen(port, () => {
    console.log(`Servidor iniciando em http://localhost${port}`)
})

