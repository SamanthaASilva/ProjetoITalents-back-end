const User = require('../model/user');

const findByIdUser = (id) => {
    return User.findById(id);
}

const createUser = (user) => {
    return User.create(user);
}

const updateUser = (id, user) => {
    return User.findByIdAndUpdate(id, user, {returnDocument: 'after'});
}

const deleteUser = (id) => {
    return User.findByIdAndRemove(id);
}

module.exports = {
    findByIdUser,
    createUser,
    updateUser,
    deleteUser
}