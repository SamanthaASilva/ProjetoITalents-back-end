const { User,  Admin} = require("./class");
const fs = require('fs');

const newAccount = new User('Samantha', '23/11/2001', '21', 'samantha@hotmail.com', '1233', '', '', 'Sorocaba', '', 'Feminino', 'Usuário');
const newAdmin = new Admin('AdminTeste', '03/10/2001', '32', 'admin@hotmail.com', '12343', '15991111111', '', '', '', 'Feminino', 'Admin');
const newRegisterData = new User('ContaTeste', '', '32', 'teste@gmail.com', '13699', '15991115555', '', 'Sorocaba', 'São Paulo', 'Masculino', 'Usuário');

fs.writeFile(`./users/user${newAccount.name}`, `${JSON.stringify(newAccount)}`, function(err){
    if(err){
        console.log('Algo deu errado', err);
        return;
    }
});

fs.writeFile(`./users/user${newAdmin.name}`, `${JSON.stringify(newAdmin)}`, function(err){
    if(err){
        console.log('Algo deu errado', err);
        return;
    }
});

if (newRegisterData.register('teste@gmail.com')){
fs.writeFile(`./users/user${newRegisterData.name}`, `${JSON.stringify(newRegisterData)}`, function(err){
    if(err){
        console.log('Algo deu errado', err);
        return;
    }
});
}
console.log('Registro realizado com sucesso!', JSON.stringify(newRegisterData));

const login = newAccount.login('samantha@hotmail.com');

if (login){
    console.log(`Login efetuado com sucesso. Olá ${newAccount.name}`);
}

const viewData = newAccount.viewRegistrationData('samantha@hotmail.com');

if (viewData){
    fs.readFile(`./users/user${newAccount.name}`, `utf8`, function(err, data){
        if(err){
            console.log('Algo deu errado', err);
            return;
        }
        console.log('Dados Cadastrais:', data);
   });
}

const deleteAccount = newAdmin.deleteRegistrationData('samantha@hotmail.com');

if (deleteAccount){
    console.log('Cadastro Deletado com Sucesso!');
    newAccount.dateOfBirth = '',
    newAccount.age = '',
    newAccount.email = '',
    newAccount.password = '',
    newAccount.phone = '',
    newAccount.street = '',
    newAccount.country = '',
    newAccount.state = '',
    newAccount.gender = '',
    newAccount.permission = ''
    fs.unlink(`./users/user${newAccount.name}`, function(err){
        if(err){
            console.log('Algo deu errado', err);
            return;
        }
    });
    newAccount.name = '',
    console.log(JSON.stringify(newAccount));
}

const changePermission = newAdmin.changePermission('samantha@hotmail.com', 'teste@hotmail.com', 'Produtor');

if (changePermission){
    newRegisterData.name = 'ContaTeste',
    newRegisterData.dateOfBirth = '01/07/2001',
    newRegisterData.age = '',
    newRegisterData.email = 'teste@hotmail.com',
    newRegisterData.password = '1478',
    newRegisterData.phone = '',
    newRegisterData.street = '',
    newRegisterData.country = 'Sorocaba',
    newRegisterData.state = 'São Paulo',
    newRegisterData.gender = '',
    newRegisterData.permission = 'Produtor'
    fs.writeFile(`./users/user${newRegisterData.name}`, `${JSON.stringify(newRegisterData)}`, function(err){
        if(err){
            console.log('Algo deu errado', err);
            return;
        }
    });
}
