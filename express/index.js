const express = require('express');
const User = require('./router/user.router');
const authService = require('./service/auth.service');
const connectToDatabase = require('./database/database');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secret = 'ejb9B184jGLjH87qnwW005Wyhcf158'
connectToDatabase();

app.use(express.json());

app.use('/user', User);

app.post("/login", async (req,res) => {
    try{
    const { email, senha } = req.body;
    const user = await authService.loginService(email);

    if(!user){
        return res.status(400).send({message: "Usuário não encontrado, tente novamente!"});
    }

    if(senha != user.senha){
        return res.status(400).send({message: "Senha incorreta"});
    }

    const token = await authService.generateToken({user}, secret);

    res.status(200).send({user, token});
    }catch(err){
        console.log(err);
    }
})

app.post("/validate", async (req,res) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({message: "Token não informado"});
    }

    const parts = authHeader.split(" ");

    if(parts.length != 2){
        return res.status(400).send({message: "Token Inválido"});
    }

    const [ schema,token ] = parts;

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({message: "Token incorreto"});
    }

    jwt.verify(token, secret, (err, decoded) => {
        if(err){
            return res.status(500).send({message: "Erro no servidor, tente novamente!"});
        }
        res.status(200).send(decoded);
    })
})

app.listen(port, () => {
    console.log(`Servidor iniciando em http://localhost:${port}`)
})