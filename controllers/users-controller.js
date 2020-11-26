const { users } = require('../data/data');
const User = require('../models/User');

const getUsers = (req, res) => {
    User.find()
        .exec((err, docs) => {
            if (err) res.status(500).json({ message: `There was an erro with the database: ${ err }.`});
            else if (docs.length === 0) res.status(404).json({ message: 'There were no users found.'});
            else res.status(200).json(docs);
        })
}

const seedDB = (req, res) => {
    User.insertMany(users)
        .then(users => res.status(200).json({ users }))
        .catch(err => res.status(500).json({ Error: err.message }));
}

module.exports = { getUsers, seedDB };