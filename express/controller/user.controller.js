const userService = require('../service/user.service');
const authService = require('../service/auth.service');

const secret = 'ejb9B184jGLjH87qnwW005Wyhcf158'

const createNewuser = async (req, res) => {
    try{
    const newUser = req.body;
  
    if(Object.keys(newUser).length === 0){
        return res.status(400).send({message: "O corpo da mensagem está vazio"});
    }

    if(!newUser.nome){
        return res.status(400).send({message: "O corpo 'nome' da mensagem está vazio"});
    }

    if(!newUser.dataNascimento){
        newUser.dataNascimento = "";
    }

    if(!newUser.cidade){
        newUser.cidade = "";
    }

    if(!newUser.genero){
        newUser.genero = "";
    }

    if(!newUser.profissao){
        newUser.profissao = "";
    }

    const token = authService.generateToken({newUser}, secret);

    res.status(201).send(await userService.createUser(newUser));

    }catch{
        console.log(`erro: ${err}`);
    }
} 

const getUser = async (req,res) => {
    try{
        const id = req.params.id;
        let found = false;
        
        const user = await userService.findByIdUser(id)
  
        if(user != null){
            found = true;
        }

        if(!found){
            return res.status(404).send({message: 'Nenhum usuário foi encontrado. Tente outro id!'});
        }
  
        res.status(200).send(user);
    }catch(err){
        console.log(`erro: ${err}`);
    }

} 

const updateUser = async (req,res) => {
    try{
    const id = req.params.id;
    const user = req.body;
    let found = false;

    if(user != null){
        found = true;
    }
  
    if(Object.keys(user).length === 0 && !found){
        return res.status(400).send({message: "O corpo da mensagem está vazio"});
    }

    if(!user.id && !found){
        return res.status(400).send({message: "O corpo 'id' da mensagem está vazio"});
    }

    if(!user.name && !found){
        return res.status(400).send({message: "O corpo 'nome' da mensagem está vazio"});
    }

    if(!user.age && !found){
        return res.status(400).send({message: "O corpo 'idade' da mensagem está vazio"});
    }

    res.status(201).send(await userService.updateUser(id, user));
    }catch(err){
        console.log(`erro: ${err}`);
    }
} 

const deleteUser = async (req,res) => {
    try{
    const id = req.params.id;
    const user = req.body;
    let found = false;

    if(user != null){
        found = true;
    }

    if(!found){
        return res.status(404).send({message: 'Nenhum usuário foi encontrado. Tente outro id!'});
    }

    res.status(200).send(await userService.deleteUser(id));
    }catch(err){
        console.log(`erro: ${err}`);
    }
}

module.exports = {
    createNewuser,
    getUser,
    updateUser,
    deleteUser
}