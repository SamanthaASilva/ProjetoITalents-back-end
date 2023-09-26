function User(name, dateOfBirth, age, email, password, phone, street, country,state, gender, permission){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.street = street;
        this.country = country;
        this.state = state;
        this.gender = gender;
        this.permission = permission;

    this.viewRegistrationData = (viewData) => {
        let data = [
            this.name = name,
            this.dateOfBirth = dateOfBirth,
            this.age = age,
            this.email = email,
            this.password = password,
            this.phone = phone,
            this.street = street,
            this.country = country,
            this.state = state,
            this.gender = gender,
            this.permission = permission
        ]
        if(viewData != this.email){
            console.log('Usuário não encontrado!');
            return false;
        }
        if(email == ''){
            console.log('Digite um e-mail!');
            return false;
        }
        return true;
    }
    
    this.login = (viewData) => {
        let data = [
            this.name = name,
            this.dateOfBirth = dateOfBirth,
            this.age = age,
            this.email = email,
            this.password = password,
            this.phone = phone,
            this.street = street,
            this.country = country,
            this.state = state,
            this.gender = gender,
            this.permission = permission
        ]
        if(viewData != this.email){
            console.log('Usuário não encontrado! Faça seu cadastro');
            return false;
        }
        if(email == ''){
            console.log('Digite um e-mail!');
            return false;
        }
        return true;
    }

    this.register = (viewData) => {
        let data = [
            this.name = name,
            this.dateOfBirth = dateOfBirth,
            this.age = age,
            this.email = email,
            this.password = password,
            this.phone = phone,
            this.street = street,
            this.country = country,
            this.state = state,
            this.gender = gender,
            this.permission = permission
        ]
        if(!this.email || !this.password){
            console.log('Para concluirmos o cadastro, é necessário informar pelo menos um e-mail e senha!');
            return false;
        }
        return true;
    }
}

class Admin extends User{
    constructor(name, dateOfBirth, age, email, password, phone, street, country,state, gender,permission){
        super(name, dateOfBirth, age, email, password, phone, street, country,state, gender,permission)
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.street = street;
        this.country = country;
        this.state = state;
        this.gender = gender;
        this.permission = permission;

    this.changePermission = (requester, user, newPermission) => {
        if(requester != this.email){
            console.log('Somente Admins podem alterar a permissão de um usuário!');
            return false;
        }
        if(user == '' || newPermission == ''){
            console.log('Digite um e-mail!');
            return false;
        }
        return true;
    }

    this.deleteRegistrationData = (viewData) => {
        if(email == ''){
            console.log('Digite um e-mail!');
            return false; 
        }
        return true;
    }
}
}
module.exports = {
    User,
    Admin
}