
const getLogin = (req, res) => {
    return res.send ('LOGIN');
};

const getRegister = (req, res) => {
    return res.send ('REGISTER');
};

module.exports = {getLogin, getRegister};