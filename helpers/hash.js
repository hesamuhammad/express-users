const bcrypt = require("bcrypt");

const hashPassword = password => {
    const encryptPassword = bcrypt.hash(password, 10).then(hash => {
        return hash;
    });

    return encryptPassword;
};

module.exports = hashPassword;
