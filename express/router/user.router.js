const router = require('express').Router();
const user = require("../controller/user.controller");

router.post('/create_new_user', user.createNewuser);
router.get('/get_user/:id', user.getUser);
router.put('/update_user/:id', user.updateUser);
router.delete('/delete_user/:id', user.deleteUser);

module.exports = router;