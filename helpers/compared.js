const bcrypt = require("bcrypt");

const compareDpassword = (plainPassword, hashPassword) => {
    const compared = bcrypt
        .compare(plainPassword, hashPassword)
        .then(result => {
            return result;
        });

    return compared;
};

module.exports = compareDpassword;
