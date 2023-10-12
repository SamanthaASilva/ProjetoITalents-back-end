let users = [
    {
        id: 1,
        name: "Samantha",
        age: 21
    },
]
const createNewuser = (req, res) => {
    const newUser = req.body;
    let found = false;
    users.forEach(element => {
        if(element.id == newUser.id){
            found = true;
            return res.status(400).send({message: "O id informado já existe, escolha outro!"});
        }
    });
  
    if(Object.keys(newUser).length === 0 && !found){
        return res.status(400).send({message: "O corpo da mensagem está vazio"});
    }

    if(!newUser.id && !found){
        return res.status(400).send({message: "O corpo 'id' da mensagem está vazio"});
    }

    if(!newUser.name && !found){
        return res.status(400).send({message: "O corpo 'nome' da mensagem está vazio"});
    }

    if(!newUser.age && !found){
        return res.status(400).send({message: "O corpo 'idade' da mensagem está vazio"});
    }

    if(!found){
    newUser.date = new Date();
    users.push(newUser);
    res.send(users);
    }
} 

const getUser = (req,res) => {
    const id = req.params.id;
    const user = req.body;
    let found = false;
    users.map(function(value){
        if(value.id == id){
            found = true;
            return res.send(value);
        }
    });

    if(!found){
        res.status(404).send({message: 'Nenhum usuário foi encontrado. Tente outro id de usuário'});
    }
} 

const updateuser = (req,res) => {
    const id = req.params.id;
    const user = req.body;
    let found = false;
  
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

    users.map(function(value, index){
        if(value.id == id){
            found = true;
            users[index] = user;
            return res.send(users[index]);
        }
    });

    if(!found){
        res.status(404).send({message: 'Nenhum usuário foi encontrado. Tente outro id de usuário'});
    }
} 

const deleteUser =(req,res) => {
    const id = req.params.id;
    const user = req.body;
    let found = false;
    users.map(function(value, index){
        if(value.id == id){
            found = true;
            users.splice(index, 1);
            return res.send(value);
        }
    });

    if(!found){
        res.status(404).send({message: 'Nenhum usuário foi encontrado. Tente outro id de usuário'});
    }
}

module.exports = {
    createNewuser,
    getUser,
    updateuser,
    deleteUser
}