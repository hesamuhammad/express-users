const users = require("../../models/users")

module.exports = {
    getAll: (req, res) => {
        res.status(200).send({message: "Welcome to our users database", data: users})
    },

    getById: (req, res) => {
        //mas miftah logic
        const { id } = req.params;
        
        const filterByid = users.filter(item => {
            if (item.id === parseInt(id)) {
                return item;
            }
        });

        res.status(200).send({
            message: `This is data user with id ${id}`,
            data: filterByid[0]
        })
    },

    getByEmail: (req, res) => {
        // hesa logic
        const userGet = users.find(item => item.email === req.params.email);
    
        if (!userGet) res.status(404).send('The user with the given Email wasnt found');
        res.send(userGet)
    },
    
    updateByEmail: (req, res) => {
        // Look up the users
        const userPut = users.find(item => item.email === req.params.email);
        // If not existing, return 404
        if (!userPut) res.status(404).send('The user with the given Email wasnt found');

        // If invalid, return 400 -- Bad request
        // if(error) {
        //     res.status(400).send(error.details[0].message)
        //     return;
        // }

        // Update users
        userPut.email = req.body.email;
        // Return to updated users
        res.send(userPut);
    },

    deleteByEmail: (req, res) => {
        // Look up the todo
        const userGet = users.find(item => item.email === req.params.email);
        // Not existing, return 404
        if (!userGet) res.status(404).send('The user with the given Email wasnt found');

        // Delete
        const index = users.indexOf(userGet);
        users.splice(index, 1);

        // Return the same course
        res.send(users)
    },

    postData: (req, res) => {
        try {
            const data = req.body
            const file = req.file;
            
            console.log(data)
            users.push({...data, avatar: file.path === undefined && null})

            res.status(200).send({ 
                message: "Your image successfully added to our database", 
                data: users
            })
        } catch(error) {
            console.log(error)
        }
    }
}