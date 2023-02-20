
const getLogin = (req, res) => {
    return res.render ('pages/login.ejs');
};

const getRegister = (req, res) => {
    return res.render ('pages/register.ejs');
};

module.exports = {getLogin, getRegister};